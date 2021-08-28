from flask_wtf import FlaskForm
from wtforms import IntegerField,
from wtforms.validators import DataRequired


class FollowerForm(FlaskForm):
    promoter_id = IntegerField('user_id', validators=[DataRequired()])
    follower_id = IntegerField('host_id', validators=[DataRequired()])
