from flask.cli import AppGroup
from .users import seed_users, undo_users
from .venues import seed_venues, undo_venues
from .categories import seed_categories, undo_categories
from .events import seed_events, undo_events
from .tickets import seed_tickets, undo_tickets
from .hearts import seed_hearts, undo_hearts
from .followers import seed_followers, undo_followers

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    # seed_users()
    # seed_venues()
    # seed_categories()
    # seed_events()
    # seed_tickets()
    seed_hearts()
    seed_followers()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    # undo_users()
    # undo_venues()
    # undo_categories()
    # undo_events()
    # undo_tickets()
    undo_hearts()
    undo_followers()
    # Add other undo functions here
