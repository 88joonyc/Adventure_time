from flask_wtf import FlaskForm
from wtforms import StringField, DateField, IntegerField, DateTimeField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError


def user_exists(form, field):
    # Checking if user exists
    venue = field.data
    user = Venue.query.filter(name.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')



class VenueForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    address = StringField('address', validators=[DataRequired()])
    city = StringField('city', validators=[DataRequired()])
    state = StringField('state', validators=[DataRequired()])
    zip_code = IntegerField('zip_code', validators=[DataRequired()])
    latitude = StringField('latitude', validators=[DataRequired()])
    longitude = StringField('longitude', validators=[DataRequired()])
