from .db import db
from sqlalchemy.sql import func


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    host_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    venue_id = db.Column(db.Integer, db.ForeignKey('venues.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    start_time = db.Column(db.DateTime, nullable=False)
    end_time = db.Column(db.DateTime, nullable=False)
    capacity = db.Column(db.Integer )
    image = db.Column(db.String(500))
    cost = db.Column(db.Integer )
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    category = db.relationship('Category', backref='categories')
    venue = db.relationship('User', backref='venues')
    host = db.relationship('User', backref='users')


    def to_dict(self):
        return {
            'id': self.id,
            'host_id': self.host_id,
            'venue_id': self.venue_id,
            'category_id': self.category_id,
            'name': self.name,
            'start_time': self.start_time,
            'end_time': self.end_time,
            'capacity': self.capacity,
            'image': self.image,
            'cost': self.cost,
        }
