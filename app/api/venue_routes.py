from flask import Blueprint, jsonify, request
# from flask_login import login_required,
from app.models import db, Venue


venue_routes = Blueprint('venues', __name__)


@venue_routes.route('/')
def venue():
    venues = Venue.query.all()
    return {"venues":  [venue.to_dict() for venue in venues] }


# @event_routes.route('/')
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
