from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Event, Venue, Category, User, Ticket, Follower, Heart
from app.forms import EventForm


event_routes = Blueprint('events', __name__)

@event_routes.route('/splash/')
def unregistered():
    events_query = Event.query.all()
    # ticket_query = Ticket.query.filter(Ticket.event_id == )
    # venues = Venue.query.all()
    events = [ event.to_dict() for event in events_query ]
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    # heart_query = Heart.query.all()
    # ticket =
    for event in events:
        event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
        event['category'] = Category.query.get(event["category_id"]).to_dict()
        # event['user'] = User.query.get(event["host_id"]).to_dict()
        # event['user'] = User.query.all()
        # event['ticket'] = jsonify(Ticket.query.filter(Ticket.event_id == event['id'])).first()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        # event['heart'] = [ heart.to_dict() for heart in heart_query if heart.event_id == event['id'] and heart.user_id == current_user.id ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
        # event['categories'] = Category.query.all()
    return {'events': events}


@event_routes.route('/')
@login_required
def evented():
    events_query = Event.query.all()
    # ticket_query = Ticket.query.filter(Ticket.event_id == )
    # venues = Venue.query.all()
    events = [ event.to_dict() for event in events_query ]
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    # ticket =
    for event in events:
        event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
        event['category'] = Category.query.get(event["category_id"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        # event['ticket'] = jsonify(Ticket.query.filter(Ticket.event_id == event['id'])).first()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['heart'] = [ heart.to_dict() for heart in heart_query if (heart.event_id == event['id'] and heart.user_id == current_user.id) ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
        # event['categories'] = Category.query.all()
    return { 'events': events } #  <  this needs to change... but too much needs to change.... this is causing the nesting..


@event_routes.route('/location/splash/<int:id>')
def unregistered_search_by_location(id):
    events_query = Event.query.all()
    events = [ event.to_dict() for event in events_query if event.venue_id == id]  # get me events with this venue_id
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
        event['category'] = Category.query.get(event["category_id"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return {'events': events}


@event_routes.route('/category/splash/<int:id>')
def unregistered_search_by_category(id):
    events_query = Event.query.all()
    events = [ event.to_dict() for event in events_query if event.category_id == id]  # get me events with this category_id
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
        event['category'] = Category.query.get(event["category_id"]).to_dict()
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
        event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
        event['category'] = Category.query.get(event["category_id"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return {'events': events}

@event_routes.route('/location/<int:id>')
@login_required
def search_by_location(id):
    events_query = Event.query.all()
    events = [ event.to_dict() for event in events_query if event.venue_id == id]  # get me events with this venue_id
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
        event['category'] = Category.query.get(event["category_id"]).to_dict()
        event['user'] = User.query.get(event["host_id"]).to_dict()
        event['ticket'] = [ ticket.to_dict() for ticket in ticket_query if ticket.event_id == event['id'] ]
        event['followers'] = [follower.to_dict() for follower in followers_query if follower.promoter_id == event['host_id']]
    return {'events': events}


@event_routes.route('/category/<int:id>')
@login_required
def search_by_category(id):
    events_query = Event.query.all()
    events = [ event.to_dict() for event in events_query if event.category_id == id]  # get me events with this category_id
    followers_query = Follower.query.all()
    ticket_query = Ticket.query.all()
    heart_query = Heart.query.all()
    for event in events:
        event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
        event['category'] = Category.query.get(event["category_id"]).to_dict()
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
        event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
        event['category'] = Category.query.get(event["category_id"]).to_dict()
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
    followers_query = Follower.query.filter(Follower.promoter_id == id)
    followers = [ follower.to_dict() for follower in followers_query  ]
    for event in events:
        event['venue'] = Venue.query.get(event["venue_id"]).to_dict()
        event['category'] = Category.query.get(event["category_id"]).to_dict()
        event['host'] = User.query.get(event["host_id"]).to_dict()
        event['followers'] = followers
        event['promoter'] = [ promoter.to_dict() for promoter in Event.query.filter(Event.host_id == event['host_id']) ]
    return {'events': events}


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
    print('===================================why does this not print========================', id)
    event = Event.query.get(id)
    db.session.delete(event)
    db.session.commit()
    return event.to_dict()
