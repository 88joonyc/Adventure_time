from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', email='demo@aa.io', image='https://image.flaticon.com/icons/png/512/149/149071.png', password='password')
    marnie = User(
        first_name='Marnie', last_name='farnie', email='marnie@aa.io', image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', password='password')
    bobbie = User(
        first_name='Bobbie', last_name='Brown', email='bobbie@aa.io', image='https://cxl.com/wp-content/uploads/2016/03/nate_munger.png', password='password')
    me = User(
        first_name='Paul', last_name='Chang', email='pc@aa.io', image='https://avatars.githubusercontent.com/u/79543569?v=4', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(me)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
