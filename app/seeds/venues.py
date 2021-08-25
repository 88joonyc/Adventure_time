from app.models import db, Venue


# Adds a demo user, you can add other users here if you want
def seed_venues():
    one = Venue(
        name='Gotham Hall', address='1356 Broadway', city='New York', state='New York', zip_code='10018', latitude='40.75180', longitude='-73.98728')
    two = Venue(
        name='AES NYC', address='415 5th Ave', city='New York', state='New York', zip_code='10016', latitude='40.75039', longitude='-73.98249')
    three = Venue(
        name='Brooklyn EXPO Center', address='72 Noble St', city='New York', state='NY', zip_code='11222', latitude='40.72854', longitude='-73.95811')
    four = Venue(
        name='Mission NYC', address='229 W 28th St', city='New York', state='New York', zip_code='10001', latitude='40.74816', longitude='-73.99474')
    online = Venue(
        name='Online', address='the web', city='web city', state='web state', zip_code='00000', latitude='00.00000', longitude='00.0000')

    # sample = Venue(
    #     name='', address='', city='', state='', zip_code='', latitude='', longitude='')


    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(online)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_venues():
    db.session.execute('TRUNCATE venues RESTART IDENTITY CASCADE;')
    db.session.commit()
