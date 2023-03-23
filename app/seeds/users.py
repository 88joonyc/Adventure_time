from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        first_name='Demo', last_name='User', email='demo@aa.io', image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkHv0_Ng0_cU7BHrNZNrGqzSfvC3OTeMLJ5rjb21x92A&usqp=CAU&ec=48600113', password='password')
    marnie = User(
        first_name='Marnie', last_name='farnie', email='marnie@aa.io', image='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80', password='password')
    bobbie = User(
        first_name='Bobbie', last_name='Brown', email='bobbie@aa.io', image='https://cxl.com/wp-content/uploads/2016/03/nate_munger.png', password='password')
    me = User(
        first_name='Paul', last_name='Chang', email='pc@aa.io', image='https://avatars.githubusercontent.com/u/79543569?v=4', password='password')
    fart = User(
        first_name='Yellen', last_name='Suh', email='yelling@aa.io', image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy2My7dlumgnxfP6xH4QWjzq8Itlcg7ExJ0A&usqp=CAU', password='password')
    keen = User(
        first_name='Long', last_name='Face', email='shy@aa.io', image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXyX8s2YD2ssWsZLLt4XuOUaVR1aUj2QRVg&usqp=CAU', password='password')
    ivy = User(
        first_name='Joe', last_name='Smalls', email='smoljoe@aa.io', image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTipha_cttrOgT3-_iJkmmJBQWMamZ1GnTDxg&usqp=CAU', password='password')
    jo = User(
        first_name='Em', last_name='N-em', email='mnm@aa.io', image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCe1SMBI0RPkDKP0E_We4fqaHAsCP2QPQXA&usqp=CAU', password='password')
    ho = User(
        first_name='johnny', last_name='Tay', email='fas@ss.io', image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4nSX6toZdVgbLo8qsUD1GMRQk4kdH3Hshw&usqp=CAU', password='password')
    fo = User(
        first_name='Beanie', last_name='John', email='dork@aa.io', image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vHIamzJkFYpq7ZoNdPajkoufkFI5OFHPBw&usqp=CAU', password='password')
    show = User(
        first_name='Amber', last_name='Jennnison', email='LoveleyA2@aa.io', image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4mZWAZ6H7rMwse_xz7xZCX6a4blTjTD_eSQ&usqp=CAU', password='password')
    lo = User(
        first_name='Brian', last_name='Palmer', email='bz123@aa.io', image='https://socialsellingnews-prod.s3.us-east-2.amazonaws.com/wp-content/uploads/2018/06/28052340/Brian.jpg', password='password')

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(me)
    db.session.add(fart)
    db.session.add(keen)
    db.session.add(ivy)
    db.session.add(jo)
    db.session.add(ho)
    db.session.add(fo)
    db.session.add(show)
    db.session.add(lo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
