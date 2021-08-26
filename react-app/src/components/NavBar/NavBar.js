
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';

import './NavBar.css'

const NavBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  const [ searchBar, toggleSearch ] = useState(false)
  const [ eventPage, toggleCreate ] = useState(false)


  let content = null

  let verificationtabs = (
    <>
      <div className='login-signup'>
        <NavLink className="signup-link" to='/login' exact={true} activeClassName='active'>
          Log In
        </NavLink>
      </div>
      <div className='login-signup'>
        <NavLink className="signup-link" to='/sign-up' exact={true} activeClassName='active'>
          Sign Up
        </NavLink>
      </div>
    </>
  )

  let usertab = (
    <>
    {/* <button onClick={() =>toggleCreate(!eventPage)}>+</button> */}
    <NavLink className="create-event" to='/host'>{<img className='ticket-icon'/>}Create </NavLink>
    <LogoutButton />
    </>
  )
  let eventsPage

  // if (eventPage) {
  //   eventsPage = (
  //     <>
  //     <div className='events-form-container'>
  //     <form>
  //       <div>
  //         <label> venue
  //           <input />
  //         </label>
  //       </div>
  //       <button>hi</button>

  //     </form>
  //     </div>

  //     </>
  //   )
  // }

  if (searchBar) {
    content = (
    <>
    <div className="searchbar-container">
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
                <div className="right-side-control">
              <button className="searchbar-toggle" onClick={() => toggleSearch(!searchBar)}>
                Search
              </button>
              {sessionUser ? usertab : verificationtabs}
            </div>
          </div>
      </nav>
    )
  }

  return (
    <>
      {content}
      {eventsPage}
    </>
  );
}

export default NavBar;
