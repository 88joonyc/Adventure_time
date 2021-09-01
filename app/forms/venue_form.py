from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, DateTimeField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError


class VenueForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    zip_code = IntegerField('zip_code', validators=[DataRequired()])
    latitude = StringField('latitude', validators=[DataRequired()])
    longitude = StringField('longitude', validators=[DataRequired()])
