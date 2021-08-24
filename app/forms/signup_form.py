from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def email_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


# def email_exists(form, field):
#     # Checking if username is already in use
#     email = field.data
#     user = User.query.filter(User.email == email).first()
#     if user:
#         raise ValidationError('Email is already in use.')


class SignUpForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired() ])
    last_name = StringField('last_name', validators=[DataRequired() ])
    email = StringField('email', validators=[DataRequired(), email_exists ])
    image = StringField('image',)
    password = StringField('password', validators=[DataRequired()])
