from flask import Blueprint, jsonify
from flask_login import login_required, current_user
from app.models import User, Ticket

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


# @ticket_routes.route('/')
# def use():
#     users_q = User.query.filter(User.id == current_user.id)
#     events = Event.query.all()
#     users = [ users.to_dict() for users in users_q ]
#     for user in users:
#         users['hearts'] = Heart.query.get(ticket["event_id"]).to_dict()
#         # users['venue'] = Venue.query.get(users["event_id"]).to_dict()

#     return {'users': users}


# @user_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user = User.query.get(id)

#     return user.to_dict()



# @user_routes.route('/<int:id>')
# @login_required
# def user(id):
#     user_query = User.query.filter(User.id == current_user.id)
#     users = [ user.to_dict() for user in user_query ]
#     ticket_query = Ticket.query.filter(Ticket.user_id == current_user.id)
#     tickets = [ ticket.to_dict() for ticket in ticket_query ]
#     for user in users:
#         user['tickets'] = tickets
#     return { 'user-info': user }
    # return {'users': [user.to_dict() for user in u]}
