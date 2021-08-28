from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Ticket, Event, Venue, Heart
from app.forms import HeartForm


heart_routes = Blueprint('hearts', __name__)

@heart_routes.route('/')
def hearts():
    # heart_query = Heart.query.filter(Heart.user_id == current_user.id)
    hearts = Event.query.all()
    # hearts = [ heart.to_dict() for heart in heart_query ]
    # for heart in hearts:
        # heart['event'] = Event.query.get(heart["event_id"]).to_dict()
        # heart['user'] = Heart.query.get(heart["user_id"]).to_dict()

    # return {'hearts': hearts}
    return {'hearts': [heart.to_dict() for heart in hearts]}


@heart_routes.route('/<int:id>')
def hart(id):
    heart_query = Heart.query.filter(Heart.event_id == id)
    hearts = [ heart.to_dict() for heart in heart_query if heart.user_id == current_user.id ]
    for heart in hearts:
        heart['event'] = Event.query.get(heart["event_id"]).to_dict()
        # ticket['category'] = Category.query.get(heart["id"]).to_dict()
        # event['categories'] = Category.query.all()
    return {'hearts': hearts}
    # return {'events': [event.to_dict() for event in events]}

@heart_routes.route('/', methods=['POST'])
@login_required
def hearted():
    form = HeartForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        heart = Heart(
            user_id = current_user.id,
            event_id = form.data['event_id'],
        )
        db.session.add(ticket)
        db.session.commit()
        return heart.to_dict()

@heart_routes.route('/remove/<int:id>', methods=['DELETE'])
@login_required
def harted(id):
    heart = Heart.query.get(id)
    db.session.delete(heart)
    db.session.commit()
    return heart.to_dict()
