from app.models import db, Event


# Adds a demo user, you can add other users here if you want
def seed_events():
    one = Event(
        host_id=1, venue_id=4, category_id=13, name='Back to Circle Nights', start_time='2021-12-16', end_time='2021-12-17', capacity=300, image='https://cdn.vox-cdn.com/thumbor/HX2ED0PEAL7G3gGqCl2TWz1nrqc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/9983223/26165798_10155904030228608_8327478344339878533_n.jpg', cost=40)
    stumph = Event(
        host_id=1, venue_id=5, category_id=9, name='Lets talk about Stumph', start_time='2021-09-16', end_time='2021-09-16', capacity=100, image='https://amishhandcrafted.com/wp-content/uploads/steamer-trunk/Steamer-trunk-in-maple-1-e1574720093489.jpg', cost=0)
    food = Event(
        host_id=2, venue_id=3, category_id=9, name='Food World Fair', start_time='2021-10-07', end_time='2021-10-09', capacity=10000, image='https://media2.fdncms.com/phx/imager/u/magnum/11825797/arizona-state-fair-concerts-2021-canceled-veterans-memorial-coliseum.jpg?cb=1629406937', cost=25)
    hot = Event(
        host_id=3, venue_id=1, category_id=9, name='My 4th wedding', start_time='2021-11-01', end_time='2021-11-01', capacity=10000, image='https://images.squarespace-cdn.com/content/v1/5afeff3b85ede1f676dc7b97/1536949548287-JLSPNHW1QR2X3OJQV5KI/hm_549.jpg', cost=0)


    db.session.add(one)
    db.session.add(stumph)
    db.session.add(food)
    db.session.add(hot)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_events():
    db.session.execute('TRUNCATE events RESTART IDENTITY CASCADE;')
    db.session.commit()
