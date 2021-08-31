import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';

// import './SignUpForm.css'r

const VenueForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip_code, setZip] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const onSignUp = async (e) => {
//     e.preventDefault();
//     if (latitude === longitude) {

//       const data = await dispatch(signUp(name, city, state, (!zip_code ? 'https://zip_code.flaticon.com/icons/png/512/149/149071.png' : zip_code), latitude));
//       if (data) {
//         setErrors(data)
//       }
//     } else {
//       setErrors(['latitudes must match! Please try again'])
//     }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateAddress = (e) => {
    setAddress(e.target.value);
  };

  const updateCity = (e) => {
    setCity(e.target.value);
  };

  const updateState = (e) => {
    setState(e.target.value);
  };

  const updateZip = (e) => {
    setZip(e.target.value);
  };

  const updateLatitude = (e) => {
    setLatitude(e.target.value);
  };

  const updateLongitude = (e) => {
    setLongitude(e.target.value);
  };

//   if (user) {
//     return <Redirect to='/' />;
//   }

  return (
    <div className='signup-form-container'>
      <div className="signup-zip_code-container">
        <div className="signup-zip_code-space">
          <div className='signup-imaage'></div>
        </div>
      </div>
    <div className='singup-form'>
        <Link to="/">
          <img className="logo-zip_code-container"/>
        </Link>
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
              name='name'
              className="user-input"
              onChange={updateName}
              value={name}
              required={true}
            ></input>
          </div>
          <div className="user-input-container">
            <label className='input-label'>Last Name</label>
            <input
              type='text'
              name='city'
              className="user-input"
              onChange={updateCity}
              value={city}
              required={true}
            ></input>
          </div>
          <div className="user-input-container">
            <label className='input-label'>state</label>
            <input
              type='state'
              name='state'
              className="user-input"
              onChange={updateState}
              value={state}
              required={true}
            ></input>
          </div>
          <div className="user-input-container">
            <label className='input-label'>zip_code url</label>
            <input
              type='text'
              name='zip_code'
              className="user-input"
              onChange={updateZip}
              value={zip_code}
            ></input>
          </div>
          <div className="user-input-container">
            <label className='input-label'>latitude</label>
            <input
              type='latitude'
              name='latitude'
              className="user-input"
              onChange={updateLatitude}
              value={latitude}
              required={true}
              min="6"
            ></input>
          </div>
          <div className="user-input-container">
            <label className='input-label'>Repeat latitude</label>
            <input
              type='latitude'
              name='repeat_latitude'
              className="user-input"
              onChange={updateLongitude}
              value={longitude}
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

export default VenueForm;
