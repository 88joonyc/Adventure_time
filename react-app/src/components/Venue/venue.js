import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { create_venue } from '../../store/venue';

import './venue.css'

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
  const history = useHistory()

  useEffect(() => {
    window.scroll(0, 0)
  }, [])

  const onSignUp = async (e) => {
    e.preventDefault();
    if (latitude && longitude) {

      const data = await dispatch(create_venue(name, address, city, state, Number(zip_code), Number(latitude), Number(longitude)));
      if (data) {
        setErrors(data)
        window.alert('Venue created!')
        history.go(0)
      }
    } else {
      setErrors(['latitudes must match! Please try again'])
    }
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


  return (
    <div className='venue-form'>

    <div className='singup-form'>
        <div>
          {/* {errors.map((error, ind) => (
            <div className='error-messages' key={ind}>{error}</div>
          ))} */}
        </div>
      <form onSubmit={onSignUp}>
          <div className="user-input-container">
            <label className='input-label'>Venue name</label>
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
            <label className='input-label'>Address</label>
            <input
              type='text'
              name='city'
              className="user-input"
              onChange={updateAddress}
              value={address}
              required={true}
            ></input>
          </div>
          <div className="user-input-container">
            <label className='input-label'>City</label>
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
            <label className='input-label'>State</label>
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
            <label className='input-label'>Zip code</label>
            <input
              type='text'
              name='zip_code'
              className="user-input"
              onChange={updateZip}
              value={zip_code}
            ></input>
          </div>
          <div className="user-input-container">
            <label className='input-label'>latitude coordintate</label>
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
            <label className='input-label'>Longitude coordintate</label>
            <input
              type='latitude'
              name='repeat_latitude'
              className="user-input"
              onChange={updateLongitude}
              value={longitude}
              required={true}
            ></input>
          </div>
            <a>dont know how to add lat & long cooordingates?</a>
          <button className="verify-button" type='submit'>Create venue</button>
          {/* <button type='button' onClick={() => history.push('/')}>go back home</button> */}
        </form>
      </div>
        <div className="venue-image-container">
          {/* <div className="signup-image-space"> */}
            {/* <div className='venue-imaage'></div> */}
          {/* </div> */}
        </div>
    </div>
  );
};

export default VenueForm;
