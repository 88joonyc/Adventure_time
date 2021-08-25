import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';


import './Host.css'

const HostForm = () => {
  const [errors, setErrors] = useState([]);

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();




  if (user) {
    return <Redirect to='/' />;
  }

  return (
        <></>
  );
};

export default HostForm;
