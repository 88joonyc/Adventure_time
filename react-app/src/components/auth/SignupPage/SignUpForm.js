import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { signUp } from '../../../store/session';

import './SignUpForm.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {

      const data = await dispatch(signUp(firstName, lastName, email, (!image ? 'https://image.flaticon.com/icons/png/512/149/149071.png' : image), password));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Passwords must match! Please try again'])
    }
  };

  const updateFirst = (e) => {
    setFirstName(e.target.value);
  };

  const updateLast = (e) => {
    setLastName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updateImage = (e) => {
    setImage(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-form-container'>
      <div className="signup-image-container">
        <div className="signup-image-space">
          <div className='signup-imaage'></div>
        </div>
      </div>
    <div className='singup-form'>
        <Link to="/">
          <img className="logo-image-container"/>
        </Link>
          <h1 className="formuser-top-message">Sign up</h1>
        <div>
          {errors.map((error, ind) => (
            <div className='error-messages' key={ind}>{error}</div>
          ))}
        </div>
      <form onSubmit={onSignUp}>
          <div className="user-input-container">
            <label className='input-label'>First Name</label>
            <input
              type='text'
              name='firstName'
              className="user-input"
              onChange={updateFirst}
              value={firstName}
              required={true}
            />
          </div>
          <div className="user-input-container">
            <label className='input-label'>Last Name</label>
            <input
              type='text'
              name='lastName'
              className="user-input"
              onChange={updateLast}
              value={lastName}
              required={true}
            />
          </div>
          <div className="user-input-container">
            <label className='input-label'>Email</label>
            <input
              type='email'
              name='email'
              className="user-input"
              onChange={updateEmail}
              value={email}
              required={true}
            />
          </div>
          <div className="user-input-container">
            <label className='input-label'>Image url</label>
            <input
              type='text'
              name='image'
              className="user-input"
              onChange={updateImage}
              value={image}
            />
          </div>
          <div className="user-input-container">
            <label className='input-label'>Password</label>
            <input
              type='password'
              name='password'
              className="user-input"
              onChange={updatePassword}
              value={password}
              required={true}
              min="6"
            />
          </div>
          <div className="user-input-container">
            <label className='input-label'>Repeat Password</label>
            <input
              type='password'
              name='repeat_password'
              className="user-input"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            />
          </div>
          <button className="verify-button" type='submit'>Sign Up</button>
          <Link to='/login'>Log In</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
