from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import Event, Venue

event_routes = Blueprint('events', __name__)


@event_routes.route('/')
def events():
    events = Event.query.all()
    # events = [event.to_dict() for event in events_query]

    # for event in events:
    #     event['venue'] = Venue.query.get(event['venue_id'])
    #     return {"events" : events}


    return {'events': [event.to_dict() for event in events]}


@event_routes.route('/<int:id>')
def event(id):
    user = Event.query.get(id)
    return user.to_dict()


@event_routes.route('/<int:id>', methods=['POST'])
@login_required
def create(id):
    form = EventForm(request.form)
    form['csrf_token'].data = request.cookies['csrf_token']
    print('============this is my validateion=============================', form.valideate_on_sbumit())
    if form.valideate_on_submit():
        event = Event(
            host_id = current_user.id,
            venue_id = form.data['venue_id'],
            category_id = form.data['category_id'],
            name = form.data['name'],
            start_time = form.data['start_time'],
            end_time = form.data['end_time'],
            capacity = form.data['capacity'],
            image = form.data['image'],
            cost = form.data['cost'],
        )
        db.session.add()
        db.session.commit()
        return event.to_dict()

@event_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def edit(id):
    event = Event.query.get(id)
    event.venue_id = form.data['venue_id']
    event.category_id = form.data['category_id']
    event.name = form.data['name']
    event.start_time = form.data['start_time']
    event.end_time = form.data['end_time']
    event.capacity = form.data['capacity']
    event.image = form.data['image']
    event.cost = form.data['cost']
    db.session.commit()
    return event.to_dict()

@event_routes.route('/remove/<int:id>', methods=['DELETE'])
@login_required
def rubbish(id):
    event = Event.query.get(id)
    db.session.delete(event)
    db.session.commit()
    return event.to_dict()
