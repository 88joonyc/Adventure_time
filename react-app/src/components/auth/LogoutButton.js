import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

import './LoginPage/LoginForm.css'

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button className="logout-button dropdown-items-out-top" onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
