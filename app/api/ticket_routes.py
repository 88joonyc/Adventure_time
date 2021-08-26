from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Ticket
from app.forms import TicketForm


ticket_routes = Blueprint('tickets', __name__)

# @ticket_routes.route('/')
# def evented():
#     events_query = Event.query.all()
#     venues = Venue.query.all()
#     events = [ event.to_dict() for event in events_query ]
#     for event in events:
#         event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
#         event['category'] = Category.query.get(event["category_id"]).to_dict()
#         event['user'] = User.query.get(event["host_id"]).to_dict()
#         # event['categories'] = Category.query.all()
#     return {'events': events}


@ticket_routes.route('/')
def ticket(id):
    tickets = Ticket.query.all()
    return {'tickets': [ticket.to_dict() for ticket in tickets]}


# @ticket_routes.route('/', methods=['POST'])
# @login_required
# def create():
#     form = EventForm()
#     form['csrf_token'].data = request.cookies['csrf_token']
#     if form.validate_on_submit:
#         event = Event(
#             host_id = current_user.id,
#             venue_id = form.data['venue_id'],
#             category_id = form.data['category_id'],
#             name = form.data['name'],
#             description = form.data['description'],
#             start_time = form.data['start_time'],
#             end_time = form.data['end_time'],
#             capacity = form.data['capacity'],
#             image = form.data['image'],
#             cost = form.data['cost'],
#         )
#         db.session.add(event)
#         db.session.commit()
#         return event.to_dict()

# @ticket_routes.route('/remove/<int:id>', methods=['DELETE'])
# @login_required
# def rubbish(id):
#     event = Event.query.get(id)
#     db.session.delete(event)
#     db.session.commit()
#     return event.to_dict()
