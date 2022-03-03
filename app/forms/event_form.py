from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, DateTimeField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError


class EventForm(FlaskForm):
    host_id = IntegerField('host_id', validators=[DataRequired()])
    venue_id = IntegerField('venue_id', validators=[DataRequired()])
    category_id = IntegerField('category_id', validators=[DataRequired()])
    name = StringField('name', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    startTime = DateTimeField('startTime time(None)', validators=[DataRequired()])
    end_time = DateTimeField('end_time time(None)', validators=[DataRequired()])
    capacity = IntegerField('capacity', validators=[DataRequired()])
    cost = IntegerField('cost', validators=[DataRequired()])
    image = StringField('image', validators=[DataRequired()])
