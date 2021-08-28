from .db import db
from sqlalchemy.sql import func


class Follower(db.Model):
    __tablename__ = 'followers'

    id = db.Column(db.Integer, primary_key=True)
    promoter_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    follower_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True), server_default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True), server_default=func.now())

    tickets = db.relationship('User', back_populates='tickets')
    events = db.relationship('Event', back_populates='tickets')

    def to_dict(self):
        return {
            'id': self.id,
            'promoter_id': self.promoter_id,
            'follower_id': self.follower_id,
        }
