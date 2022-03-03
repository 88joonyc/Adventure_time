from flask import Blueprint, jsonify, request
from sqlalchemy import desc
from flask_login import login_required, current_user
from app.models import db, Event, Venue, Category, User, Ticket, Follower, Heart
from app.forms import EventForm


event_routes = Blueprint('events', __name__)

@event_routes.route('/splash/')
def unregistered():
    events_query = Event.query.order_by(Event.startTime.asc()).all()
    events = [ event.to_dict() for event in events_query ]
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venueId"]).to_dict()
        event['category'] = Category.query.get(event["categoryId"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return {'events': events}


@event_routes.route('/')
@login_required
def evented():
    events_query = Event.query.order_by(Event.startTime.asc()).all()
    events = [ event.to_dict() for event in events_query ]
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venueId"]).to_dict()
        event['category'] = Category.query.get(event["categoryId"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['heart'] = [ heart.to_dict() for heart in heart_query if (heart.event_id == event['id'] and heart.user_id == current_user.id) ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return { 'events': events } #  <  this needs to change... but too much needs to change.... this is causing the nesting..


@event_routes.route('/location/splash/<int:id>')
def unregistered_search_by_location(id):
    events_query = Event.query.all()
    events = [ event.to_dict() for event in events_query if event.venueId == id]  # get me events with this venueId
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venueId"]).to_dict()
        event['category'] = Category.query.get(event["categoryId"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return {'events': events}


@event_routes.route('/category/splash/<int:id>')
def unregistered_search_by_category(id):
    events_query = Event.query.all()
    events = [ event.to_dict() for event in events_query if event.categoryId == id]  # get me events with this categoryId
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venueId"]).to_dict()
        event['category'] = Category.query.get(event["categoryId"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return {'events': events}


@event_routes.route('/cost/splash/<int:id>')
def unregistered_search_by_cost(id):
    events_query = Event.query.all()
    events = [ event.to_dict() for event in events_query if event.cost == id]  # get me events with this cost column
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venueId"]).to_dict()
        event['category'] = Category.query.get(event["categoryId"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return {'events': events}

@event_routes.route('/location/<int:id>')
@login_required
def search_by_location(id):
    events_query = Event.query.all()
    events = [ event.to_dict() for event in events_query if event.venueId == id]  # get me events with this venueId
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venueId"]).to_dict()
        event['category'] = Category.query.get(event["categoryId"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return {'events': events}


@event_routes.route('/category/<int:id>')
@login_required
def search_by_category(id):
    events_query = Event.query.all()
    events = [ event.to_dict() for event in events_query if event.categoryId == id]  # get me events with this categoryId
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venueId"]).to_dict()
        event['category'] = Category.query.get(event["categoryId"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['heart'] = [ heart.to_dict() for heart in heart_query if heart.event_id == event['id'] and heart.user_id == current_user.id and current_user ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return {'events': events}

@event_routes.route('/cost/<int:id>')
@login_required
def search_by_cost(id):
    events_query = Event.query.all()
    events = [ event.to_dict() for event in events_query if event.cost == id]  # get me events with this cost column
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venueId"]).to_dict()
        event['category'] = Category.query.get(event["categoryId"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['heart'] = [ heart.to_dict() for heart in heart_query if heart.event_id == event['id'] and heart.user_id == current_user.id ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return {'events': events}

@event_routes.route('/<int:id>')
@login_required
def event(id):
    events_query = Event.query.filter(Event.id == id)
    event_query = Event.query.all()
    events = [ event.to_dict() for event in events_query ]
    for event in events:
        event['venue'] = Venue.query.get(event["venueId"]).to_dict()
        event['category'] = Category.query.get(event["categoryId"]).to_dict()
        event['host'] = User.query.get(event["host_id"]).to_dict()
        event['followers'] = [ follower.to_dict() for follower in (Follower.query.filter( Follower.promoter_id == event["host_id"])) ]
        event['following'] = [ my_follower.to_dict() for my_follower in Follower.query.filter( Follower.follower_id == current_user.id ) if event['host_id'] == my_follower.promoter_id ]
        event['promoter'] = [ promoter.to_dict() for promoter in Event.query.filter(Event.host_id == event['host_id']) ]
    return {'events': events }


@event_routes.route('/', methods=['POST'])
@login_required
def create():
    form = EventForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        event = Event(
            host_id = current_user.id,
            venueId = form.data['venueId'],
            categoryId = form.data['categoryId'],
            name = form.data['name'],
            description = form.data['description'],
            startTime = form.data['startTime'],
            endTime = form.data['endTime'],
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
    event.venueId = form.data['venueId']
    event.categoryId = form.data['categoryId']
    event.name = form.data['name']
    event.description = form.data['description']
    event.startTime = form.data['startTime']
    event.endTime = form.data['endTime']
    event.capacity = form.data['capacity']
    event.image = form.data['image']
    event.cost = form.data['cost']
    db.session.commit()
    return event.to_dict()


@event_routes.route('/edit/capacity/<int:id>', methods=['PUT'])
@login_required
def edit_seats(id):
    event = Event.query.get(id)
    form = EventForm()
    event.capacity = form.data['capacity']
    db.session.commit()
    return event.to_dict()

@event_routes.route('/remove/<int:id>', methods=['DELETE'])
@login_required
def rubbish(id):
    event = Event.query.get(id)
    db.session.delete(event)
    db.session.commit()
    return event.to_dict()
