from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Ticket, Event, Venue, Follower, User
from app.forms import FollowerForm


follower_routes = Blueprint('followers', __name__)


@follower_routes.route('/all')
def follows():
    followers_query = Follower.query.filter(Follower.promoter_id == current_user.id)
    followers = [follower.to_dict() for follower in followers_query]
    for follower in followers:
        follower['user'] = User.query.get(follower['follower_id']).to_dict()
    return {"followers": followers }

    # return {'followers': [ follower.to_dict() for follower in followers_query if  ] }
    # return {'followers': [ follower.to_dict() for follower in followers_query if  ] }

@follower_routes.route('/all/<int:id>')
def promos(id):
    followers = Follower.query.filter(Follower.promoter_id == id)
    return {'followers': [ follower.to_dict() for follower in followers ]}

@follower_routes.route('/<int:id>')
def ticketed(id):
    followers_query = Follower.query.filter(Follower.promoter_id == id)
    followers = [ follower.to_dict() for follower in followers_query if follower.follower_id == current_user.id ]
    return {'followers': followers}

@follower_routes.route('/', methods=['POST'])
@login_required
def follow():
    form = FollowerForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit:
        follower = Follower(
            promoter_id = form.data['promoter_id'],
            follower_id = current_user.id,
        )
        db.session.add(follower)
        db.session.commit()
        return follower.to_dict()

@follower_routes.route('/remove/<int:id>', methods=['DELETE'])
@login_required
def fowl(id):
    follower = Follower.query.get(id)
    db.session.delete(follower)
    db.session.commit()
    return follower.to_dict()
