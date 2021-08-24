import React, { useState } from 'react';
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

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, email, image, password));
      if (data) {
        setErrors(data)
      }
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
      <form onSubmit={onSignUp}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
          <div className="user-input-container">
            <label className='input-label'>First Name</label>
            <input
              type='text'
              name='firstName'
              className="user-input"
              onChange={updateFirst}
              value={firstName}
              required={true}
            ></input>
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
            ></input>
          </div>
          <div className="user-input-container">
            <label className='input-label'>Email</label>
            <input
              type='text'
              name='email'
              className="user-input"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div className="user-input-container">
            <label className='input-label'>Image url</label>
            <input
              type='text'
              name='image'
              className="user-input"
              onChange={updateImage}
              value={image}
            ></input>
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
            ></input>
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
            ></input>
          </div>
          <button className="verify-button" type='submit'>Sign Up</button>
          <Link to='/login'>Log In</Link>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
