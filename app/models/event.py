from .db import db
from sqlalchemy.sql import func


class Event(db.Model):
    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    host_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    venueId = db.Column(db.Integer, db.ForeignKey('venues.id'), nullable=False)
    categoryId = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    name = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(5000), nullable=False)
    startTime = db.Column(db.DateTime(timezone=False), nullable=False)
    endTime = db.Column(db.DateTime(timezone=False), nullable=False)
    capacity = db.Column(db.Integer )
    image = db.Column(db.String)
    cost = db.Column(db.Integer )
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    categories = db.relationship('Category', back_populates='categories')
    venue = db.relationship('Venue', back_populates='venues')
    host = db.relationship('User', backref='users')
    tickets = db.relationship('Ticket', back_populates="events", cascade="all, delete")
    hearts = db.relationship('Heart', cascade="all, delete" )

    def to_dict(self):
        return {
            'id': self.id,
            'host_id': self.host_id,
            'venueId': self.venueId,
            'categoryId': self.categoryId,
            'name': self.name,
            'description': self.description,
            'startTime': self.startTime,
            'endTime': self.endTime,
            'capacity': self.capacity,
            'image': self.image,
            'cost': self.cost,
        }
