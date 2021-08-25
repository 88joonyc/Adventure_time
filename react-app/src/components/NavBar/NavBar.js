
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  const [ searchBar, toggleSearch ] = useState(false)


  let content = null

  if (searchBar) {
    content = (
    <>
    <div>
      <input
        placeholder='Search events'
        className='search-input'
      />
    <button className='cancel-button' onClick={() => toggleSearch(!searchBar)}>cancel</button>
    </div>
    </>
    )
  } else {
        content = (
          <nav>
          <div className="navbar-container">
            <div>
              <NavLink to='/' exact={true} activeClassName='active'>
                <img className="navbar-image logo-image-container"/>
              </NavLink>
            </div>
            <button className="searchbar-toggle" onClick={() => toggleSearch(!searchBar)}>Search Bar</button>
            <div className='login-signup'>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Log In
              </NavLink>
            </div>
            <div className='login-signup'>
              <NavLink className="signup-link" to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </div>
            {sessionUser ?
            <LogoutButton /> : null}
          </div>
        </nav>
    )
  }

  if (true) {

  }


  return (
    <>
      {content}
    </>
  );
}

export default NavBar;
