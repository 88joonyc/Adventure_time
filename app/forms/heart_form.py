from flask_wtf import FlaskForm
from wtforms import IntegerField,
from wtforms.validators import DataRequired


class HeartForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired()])
    event_id = IntegerField('host_id', validators=[DataRequired()])
