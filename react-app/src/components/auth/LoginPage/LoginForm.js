import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';

import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-form-container'>
      <div className='login-form'>
      <h1 className="">Log in</h1>
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='input-container'>
            <div className='user-input-container'>
              <label className="login-label" htmlFor='email'>Email</label>
              <input
                name='email'
                className='login-input'
                type='text'
                value={email}
                onChange={updateEmail}
              />
            </div>
            <div className="user-input-container">
              <label className="login-label" htmlFor='password'>Password</label>
              <input
                name='password'
                type='password'
                className='login-input'
                value={password}
                onChange={updatePassword}
              />
          </div>
              <button className='login-button' type='submit'>Login</button>
          </div>
        </form>
      </div>
      <div className="login-image-container">
        <div className="login-image-space">
          <div className='login-imaage'></div>
          <img  className='login-image' src='https://cdn2.lamag.com/wp-content/uploads/sites/6/2021/05/eric-ward-uD0W-swVGgE-unsplash.jpg'/>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
