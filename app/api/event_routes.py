from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Event, Venue, Category
from app.forms import EventForm


event_routes = Blueprint('events', __name__)


# @event_routes.route('/')
# def events():
#     events = Event.query.all()
#     # events = [event.to_dict() for event in events_query]

#     # for event in events:
#     #     event['venue'] = null
#     #     return {"events" : events}


#     return {'events': [event.to_dict() for event in events]}


@event_routes.route('/')
def evented():
    events_query = Event.query.all()
    venues = Venue.query.all()
    events = [ event.to_dict() for event in events_query ]
    for event in events:
        event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
        event['category'] = Category.query.get(event["category_id"]).to_dict()
    return {'events': events}


@event_routes.route('/<int:id>')
def event(id):
    user = Event.query.get(id)
    return user.to_dict()


@event_routes.route('/', methods=['POST'])
@login_required
def create():
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        event = Event(
            host_id = current_user.id,
            venue_id = form.data['venue_id'],
            category_id = form.data['category_id'],
            name = form.data['name'],
            description = form.data['description'],
            start_time = form.data['start_time'],
            end_time = form.data['end_time'],
            capacity = form.data['capacity'],
            image = form.data['image'],
            cost = form.data['cost'],
        )
        db.session.add(event)
        db.session.commit()
        return event.to_dict()

@event_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def edit(id):
    event = Event.query.get(id)
    form = EventForm()
    event.venue_id = form.data['venue_id']
    event.category_id = form.data['category_id']
    event.name = form.data['name']
    event.description = form.data['description']
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
