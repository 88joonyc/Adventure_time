from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Ticket, Event, Venue
from app.forms import TicketForm


ticket_routes = Blueprint('tickets', __name__)

@ticket_routes.route('/')
def ticketed():
    tickets_query = Ticket.query.filter(Ticket.user_id == current_user.id)
    events = Event.query.all()
    tickets = [ ticket.to_dict() for ticket in tickets_query ]
    for ticket in tickets:
        ticket['event'] = Event.query.get(ticket["event_id"]).to_dict()
        ticket['venue'] = Venue.query.get(ticket["event_id"]).to_dict()

    return {'tickets': tickets}

# @ticket_routes.route('/')
# def ticket():
#     tickets = Ticket.query.all()
#     return {'tickets': [ticket.to_dict() for ticket in tickets]}

# @ticket_routes.route('/')
# def ticket():
#     tickets = Ticket.query.filter(Ticket.user_id == current_user.id)
#     return {'tickets': [ticket.to_dict() for ticket in tickets]}


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
