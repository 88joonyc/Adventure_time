from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, DateTimeField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError


class TicketForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    event_id = IntegerField('host_id', validators=[DataRequired()])
