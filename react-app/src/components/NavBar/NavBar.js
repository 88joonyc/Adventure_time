
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)


  let content = null

  if (!sessionUser) {
    content = (
      <nav>
      <div className="navbar-container">
        <div>
          <NavLink to='/' exact={true} activeClassName='active'>
            <img className="navbar-image logo-image-container"/>
          </NavLink>
        </div>
        <div>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
        <div>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    </nav>
    )
  }


  return (
    <>
      {content}
    </>
  );
}

export default NavBar;
