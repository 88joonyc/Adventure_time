from app.models import db, Heart


# Adds a demo user, you can add other users here if you want
def seed_hearts():
    aone = Heart(
        user_id=1, event_id=1,)

    atwo = Heart(
        user_id=1, event_id=2,)

    athree = Heart(
        user_id=1, event_id=3,)

    afour = Heart(
        user_id=1, event_id=4,)

    aone2 = Heart(
        user_id=2, event_id=1,)

    atwo2 = Heart(
        user_id=2, event_id=2,)

    athree2 = Heart(
        user_id=2, event_id=3,)

    afour2 = Heart(
        user_id=2, event_id=4,)

    aone3 = Heart(
        user_id=3, event_id=1,)

    atwo3 = Heart(
        user_id=3, event_id=2,)

    athree3 = Heart(
        user_id=3, event_id=3,)

    afour3 = Heart(
        user_id=3, event_id=4,)

    aone23 = Heart(
        user_id=4, event_id=1,)

    atwo23 = Heart(
        user_id=4, event_id=2,)

    athree23 =Heart(
        user_id=4, event_id=3,)

    afour23 = Heart(
        user_id=4, event_id=4,)

    one = Heart(
        user_id=5, event_id=1,)

    two = Heart(
        user_id=5, event_id=2,)

    three = Heart(
        user_id=5, event_id=3,)

    four = Heart(
        user_id=5, event_id=4,)

    one2 = Heart(
        user_id=6, event_id=1,)

    two2 = Heart(
        user_id=6, event_id=2,)

    three2 = Heart(
        user_id=6, event_id=3,)

    four2 = Heart(
        user_id=6, event_id=4,)

    one3 = Heart(
        user_id=7, event_id=1,)

    two3 = Heart(
        user_id=7, event_id=2,)

    three3 = Heart(
        user_id=7, event_id=3,)

    four3 = Heart(
        user_id=7, event_id=4,)

    one23 = Heart(
        user_id=8, event_id=1,)

    two23 = Heart(
        user_id=8, event_id=2,)

    three23 =Heart(
        user_id=8, event_id=3,)

    four23 = Heart(
        user_id=8, event_id=4,)


    db.session.add(aone)
    db.session.add(aone2)
    db.session.add(atwo)
    db.session.add(atwo2)
    db.session.add(athree)
    db.session.add(athree2)
    db.session.add(afour)
    db.session.add(afour2)
    db.session.add(aone3)
    db.session.add(aone23)
    db.session.add(atwo3)
    db.session.add(atwo23)
    db.session.add(athree3)
    db.session.add(athree23)
    db.session.add(afour3)
    db.session.add(afour23)
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
def undo_hearts():
    db.session.execute('TRUNCATE hearts RESTART IDENTITY CASCADE;')
    db.session.commit()
