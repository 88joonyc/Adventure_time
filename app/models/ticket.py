from .db import db
from sqlalchemy.sql import func


class Ticket(db.Model):
    __tablename__ = 'tickets'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id') nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('events.id') nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    tickets = db.relationship('User', back_populates='tickets')
    events = db.relationship('Event', back_populates='tickets')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'event_id': self.event_id,
        }
