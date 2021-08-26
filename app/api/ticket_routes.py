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
def ticket():
    tickets = Ticket.query.all()
    return {'tickets': [ticket.to_dict() for ticket in tickets]}


@ticket_routes.route('/', methods=['POST'])
@login_required
def create():
    form = TicketForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        ticket = Ticket(
            user_id = current_user.id,
            event_id = form.data['event_id'],
        )
        db.session.add(ticket)
        db.session.commit()
        return ticket.to_dict()

@ticket_routes.route('/remove/<int:id>', methods=['DELETE'])
@login_required
def rubbish(id):
    ticket = Ticket.query.get(id)
    db.session.delete(ticket)
    db.session.commit()
    return ticket.to_dict()
