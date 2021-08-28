from app.models import db, Follower


# Adds a demo user, you can add other users here if you want
def seed_followers():

    aone = Follower(
        promoter_id=1, follower_id=1,)

    atwo = Follower(
        promoter_id=1, follower_id=2,)

    athree = Follower(
        promoter_id=1, follower_id=3,)

    afour = Follower(
        promoter_id=1, follower_id=4,)

    aone1 = Follower(
        promoter_id=1, follower_id=5,)

    atwo1 = Follower(
        promoter_id=1, follower_id=6,)

    athree1 = Follower(
        promoter_id=1, follower_id=7,)

    afour1 = Follower(
        promoter_id=1, follower_id=8,)

    aone3 = Follower(
        promoter_id=1, follower_id=9,)

    atwo3 = Follower(
        promoter_id=1, follower_id=10,)

    athree3 = Follower(
        promoter_id=1, follower_id=11,)

    afour3 = Follower(
        promoter_id=1, follower_id=12,)

    aone13 = Follower(
        promoter_id=2, follower_id=1,)

    atwo13 = Follower(
        promoter_id=2, follower_id=2,)

    athree13 =Follower(
        promoter_id=2, follower_id=3,)

    afour13 = Follower(
        promoter_id=2, follower_id=4,)

    one = Follower(
        promoter_id=2, follower_id=5,)

    two = Follower(
        promoter_id=2, follower_id=6,)

    three = Follower(
        promoter_id=2, follower_id=7,)

    four = Follower(
        promoter_id=2, follower_id=8,)

    one1 = Follower(
        promoter_id=2, follower_id=9,)

    two1 = Follower(
        promoter_id=2, follower_id=10,)

    three1 = Follower(
        promoter_id=2, follower_id=11,)

    four1 = Follower(
        promoter_id=2, follower_id=12,)

    one3 = Follower(
        promoter_id=3, follower_id=1,)

    two3 = Follower(
        promoter_id=3, follower_id=2,)

    three3 = Follower(
        promoter_id=3, follower_id=3,)

    four3 = Follower(
        promoter_id=3, follower_id=4,)

    one13 = Follower(
        promoter_id=3, follower_id=5,)

    two13 = Follower(
        promoter_id=3, follower_id=6,)

    three13 =Follower(
        promoter_id=4, follower_id=7,)

    four13 = Follower(
        promoter_id=4, follower_id=8,)



    awun = Follower(
        promoter_id=5, follower_id=1,)

    atuw = Follower(
        promoter_id=5, follower_id=2,)

    atree = Follower(
        promoter_id=5, follower_id=3,)

    apour = Follower(
        promoter_id=5, follower_id=4,)

    awun1 = Follower(
        promoter_id=6, follower_id=5,)

    atuw1 = Follower(
        promoter_id=6, follower_id=6,)

    atree1 = Follower(
        promoter_id=6, follower_id=7,)

    apour1 = Follower(
        promoter_id=6, follower_id=8,)

    awun3 = Follower(
        promoter_id=6, follower_id=9,)

    atuw3 = Follower(
        promoter_id=7, follower_id=10,)

    atree3 = Follower(
        promoter_id=7, follower_id=11,)

    apour3 = Follower(
        promoter_id=7, follower_id=12,)

    awun13 = Follower(
        promoter_id=7, follower_id=1,)

    atuw13 = Follower(
        promoter_id=8, follower_id=2,)

    atree13 =Follower(
        promoter_id=8, follower_id=3,)

    apour13 = Follower(
        promoter_id=8, follower_id=4,)

    wun = Follower(
        promoter_id=9, follower_id=5,)

    tuw = Follower(
        promoter_id=9, follower_id=6,)

    tree = Follower(
        promoter_id=9, follower_id=7,)

    pour = Follower(
        promoter_id=10, follower_id=8,)

    wun1 = Follower(
        promoter_id=10, follower_id=9,)

    tuw1 = Follower(
        promoter_id=11, follower_id=10,)

    tree1 = Follower(
        promoter_id=11, follower_id=11,)

    pour1 = Follower(
        promoter_id=12, follower_id=12,)

    wun3 = Follower(
        promoter_id=12, follower_id=1,)

    tuw3 = Follower(
        promoter_id=11, follower_id=2,)

    tree3 = Follower(
        promoter_id=12, follower_id=3,)

    pour3 = Follower(
        promoter_id=12, follower_id=4,)

    wun13 = Follower(
        promoter_id=11, follower_id=5,)

    tuw13 = Follower(
        promoter_id=10, follower_id=6,)

    tree13 =Follower(
        promoter_id=10, follower_id=7,)

    pour13 = Follower(
        promoter_id=11, follower_id=8,)



    db.session.add(aone)
    db.session.add(aone1)
    db.session.add(atwo)
    db.session.add(atwo1)
    db.session.add(athree)
    db.session.add(athree1)
    db.session.add(afour)
    db.session.add(afour1)
    db.session.add(aone3)
    db.session.add(aone13)
    db.session.add(atwo3)
    db.session.add(atwo13)
    db.session.add(athree3)
    db.session.add(athree13)
    db.session.add(afour3)
    db.session.add(afour13)
    db.session.add(one)
    db.session.add(one1)
    db.session.add(two)
    db.session.add(two1)
    db.session.add(three)
    db.session.add(three1)
    db.session.add(four)
    db.session.add(four1)
    db.session.add(one3)
    db.session.add(one13)
    db.session.add(two3)
    db.session.add(two13)
    db.session.add(three3)
    db.session.add(three13)
    db.session.add(four3)
    db.session.add(four13)

    db.session.add(awun)
    db.session.add(awun1)
    db.session.add(atuw)
    db.session.add(atuw1)
    db.session.add(atree)
    db.session.add(atree1)
    db.session.add(apour)
    db.session.add(apour1)
    db.session.add(awun3)
    db.session.add(awun13)
    db.session.add(atuw3)
    db.session.add(atuw13)
    db.session.add(atree3)
    db.session.add(atree13)
    db.session.add(apour3)
    db.session.add(apour13)
    db.session.add(wun)
    db.session.add(wun1)
    db.session.add(tuw)
    db.session.add(tuw1)
    db.session.add(tree)
    db.session.add(tree1)
    db.session.add(pour)
    db.session.add(pour1)
    db.session.add(wun3)
    db.session.add(wun13)
    db.session.add(tuw3)
    db.session.add(tuw13)
    db.session.add(tree3)
    db.session.add(tree13)
    db.session.add(pour3)
    db.session.add(pour13)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_followers():
    db.session.execute('TRUNCATE followers RESTART IDENTITY CASCADE;')
    db.session.commit()
