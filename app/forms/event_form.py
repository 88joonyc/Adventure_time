from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError


class EventForm(FlaskForm):
    host_id = IntegerField('host_id', validators=[DataRequired()])
    venue_id = IntegerField('venue_id', validators=[DataRequired()])
    category_id = IntegerField('category_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    start_time = DateField('start_time', validators=[DataRequired()])
    end_time = DateField('end_time', validators=[DataRequired()])
    capacity = IntegerField('capacity', validators=[DataRequired()])
    cost = IntegerField('cost', validators=[DataRequired()])
    image = StringField('image', validators=[DataRequired()])
