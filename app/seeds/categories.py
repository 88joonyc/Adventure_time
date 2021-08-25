from app.models import db, Category


# Adds a demo user, you can add other users here if you want
def seed_categories():
    one = Category( type='Auto, Boat and Air' )
    two = Category( type='Business & Professional' )
    three = Category( type='Charity & Causes' )
    four = Category( type='Communication & Culture' )
    five = Category( type='Family & Education' )
    six = Category( type='Fashion & Beauty' )
    seven = Category( type='Film, Media & Entertainment' )
    eight = Category( type='Food & Drink' )
    nine = Category( type='Government & Politics' )
    ten = Category( type='Health & Wellness' )
    eleven = Category( type='Hobbies & Special Interest' )
    twelve = Category( type='Home & Lifestyle' )
    thirteen = Category( type='Music' )
    fourt = Category( type='Other' )
    fift = Category( type='Performing & Visual Arts' )
    sixt = Category( type='Religion & Spirituality' )
    sevt = Category( type='School & Activities' )
    eigt = Category( type='Science & Technology' )
    nint = Category( type='Seasonal & Holiday' )
    twnt = Category( type='Sport & Fitness' )
    twt1 = Category( type='Travel & Outdoor' )

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)
    db.session.add(eight)
    db.session.add(nine)
    db.session.add(ten)
    db.session.add(eleven)
    db.session.add(twelve)
    db.session.add(thirteen)
    db.session.add(fourt)
    db.session.add(fift)
    db.session.add(sixt)
    db.session.add(sevt)
    db.session.add(eigt)
    db.session.add(nint)
    db.session.add(twnt)
    db.session.add(twt1)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_categories():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
