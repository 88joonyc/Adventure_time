from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Venue
from app.forms import VenueForm


venue_routes = Blueprint('venues', __name__)


@venue_routes.route('/')
def venue():
    venues = Venue.query.all()
    return {"venues":  [venue.to_dict() for venue in venues] }


@venue_routes.route('/', methods=['POST'])
@login_required
def create():
    form = VenueForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        venue = Venue(
            name = form.data['name'],
            address = form.data['address'],
            city = form.data['city'],
            state = form.data['state'],
            zip_code = form.data['zip_code'],
            latitude = form.data['latitude'],
            longitude = form.data['longitude'],
        )
        db.session.add(venue)
        db.session.commit()
        return event.to_dict()


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
