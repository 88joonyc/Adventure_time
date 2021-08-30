from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User
# from email_validator import Email

def email_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')

# def validate_email(form, field):
#     # Checking if username is already in use
#     email = field.data
#     if user:
#         raise ValidationError('Email is already in use.')


class SignUpForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired(), Length(max=50, message='First name is too long, sorry.') ])
    last_name = StringField('last_name', validators=[DataRequired(), Length(max=50, message='Last name is too long, sorry.')  ])
    email = StringField('email', validators=[DataRequired(), email_exists ])
    image = StringField('image', default=('https://image.flaticon.com/icons/png/512/149/149071.png'))
    password = StringField('password', validators=[DataRequired(), Length(min=6, message='Password must be at least 6 characters long.')])
