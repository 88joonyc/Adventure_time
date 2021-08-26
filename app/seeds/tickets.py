from app.models import db, Ticket


# Adds a demo user, you can add other users here if you want
def seed_tickets():
    one = Ticket(
        user_id=1, event_id=1,)

    two = Ticket(
        user_id=1, event_id=2,)

    three = Ticket(
        user_id=1, event_id=3,)

    four = Ticket(
        user_id=1, event_id=4,)

    one2 = Ticket(
        user_id=2, event_id=1,)

    two2 = Ticket(
        user_id=2, event_id=2,)

    three2 = Ticket(
        user_id=2, event_id=3,)

    four2 = Ticket(
        user_id=2, event_id=4,)

    one3 = Ticket(
        user_id=3, event_id=1,)

    two3 = Ticket(
        user_id=3, event_id=2,)

    three3 = Ticket(
        user_id=3, event_id=3,)

    four3 = Ticket(
        user_id=3, event_id=4,)

    one23 = Ticket(
        user_id=4, event_id=1,)

    two23 = Ticket(
        user_id=4, event_id=2,)

    three23 =Ticket(
        user_id=4, event_id=3,)

    four23 = Ticket(
        user_id=4, event_id=4,)

    db.session.add(one)
    db.session.add(one2)
    db.session.add(two)
    db.session.add(two2)
    db.session.add(three)
    db.session.add(three2)
    db.session.add(four)
    db.session.add(four2)
    db.session.add(one3)
    db.session.add(one23)
    db.session.add(two3)
    db.session.add(two23)
    db.session.add(three3)
    db.session.add(three23)
    db.session.add(four3)
    db.session.add(four23)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_tickets():
    db.session.execute('TRUNCATE tickets RESTART IDENTITY CASCADE;')
    db.session.commit()
