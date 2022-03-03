from flask import Blueprint, jsonify, request
# from flask_login import login_required,
from app.models import db, Category


category_routes = Blueprint('categories', __name__)


@category_routes.route('/')
def category():
    categories = Category.query.all()
    return {"categories":  [category.to_dict() for category in categories] }


# @event_routes.route('/')
# def evented():
#     events_query = Event.query.all()
#     venues = Venue.query.all()
#     events = [ event.to_dict() for event in events_query ]
#     for event in events:
#         event['venue'] = Venue.query.get(event["venueId"]).to_dict()
#         event['category'] = Category.query.get(event["categoryId"]).to_dict()
#         event['user'] = User.query.get(event["host_id"]).to_dict()
#         # event['categories'] = Category.query.all()
#     return {'events': events}
