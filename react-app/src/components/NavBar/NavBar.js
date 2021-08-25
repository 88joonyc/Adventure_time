
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)


  let content = null

  if (true) {
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
            Sing In
          </NavLink>
        </div>
        <div>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
          <LogoutButton />
        </div>
         {/* <div className='navbar-drop-container'>
          <div className=''>
              <i className="icon far fa-user-circle fa-3x"></i>
              <div className=''>
                <div className=''>
                <p>{`${sessionUser?.first_name} ${sessionUser?.last_name}`}</p>
                <p>Email: {sessionUser?.email}</p>

                </div>

                <div className=''>
                <p>Free Sneax</p>
                <p>Account</p>
                <p>Banking</p>
                <p>Recurring</p>
                <p>History</p>
                <p>Settings</p>
                </div>

                <div className=''>
                <p>Help Center</p>
                <p>Contact Us</p>
                <p>Disclosures</p>
                </div>
                <LogoutButton />

                </div>
                </div>
        </div> */}

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
