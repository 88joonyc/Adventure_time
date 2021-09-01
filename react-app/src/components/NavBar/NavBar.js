
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


import './NavBar.css'
import { authenticate } from '../../store/session';

const NavBar = () => {
  const dispatch = useDispatch()

  const sessionUser = useSelector(state => state.session?.user)

  const [ searchBar, toggleSearch ] = useState(false)
  const [ showMenu, setShowMenu ] = useState(false);

  useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);
        dispatch(authenticate())

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu, authenticate]);

  const openMenu = () => {
      if (showMenu) return;
      setShowMenu(true);
  };

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
    <NavLink className="create-event" to='/host'>{<img alt='' className='ticket-icon'/>} Create </NavLink>
    <NavLink className="create-event" to='/tickets'>{<img alt='' className='ticketing-icon'/>} Tickets </NavLink>
    <div className='dropddown-tab'>
            <button className='toggle-drop-button' onClick={openMenu}>
              <div className="drop-button-items">
                  <div className='drop-nav-email'>{sessionUser?.email}</div>
                  <img alt='' className='profile-pic' src={sessionUser?.image}/>
              </div>
            </button>
            {showMenu && (
                <div className='menu-dropdown'>
                    {/* <div className='dropdown-items-out-bot'>Manage my events</div> */}
                    <Link className='linke-not-deco' to='/tickets'><div className='dropdown-items-mid'>Tickets ( current : {sessionUser.tickets?.length})</div></Link>
                    {/* <Link className='linke-not-deco' to='/tickets'><div className='dropdown-items-mid'>Hearted</div></Link> */}
                    {/* <Link className='linke-not-deco' to='/tickets'><div className='dropdown-items-mid'>Following</div></Link> */}
                    {/* <Link className='linke-not-deco' to='/tickets'><div className='dropdown-items-mid'>Collection</div></Link> */}
                    <Link className='linke-not-deco' to='/host'><div className='dropdown-items-mid'>Host</div></Link>
                    {/* <div className='dropdown-items-out-top'>Account Settings</div> */}
                    <div className=''>{<LogoutButton />}</div>
                </div>
            )}
        </div>

    </>
  )

  // this is a search bar

  //   const filter = (memory, query) => {
    //       return memory?.filter((brain) => {
      //           const venue_name = brain.name.toLowerCase()
      //           const venue_address = brain.address.toLowerCase()
      //           if (venue_name.includes(query)) return venue_name.includes(query)
      //           if (venue_address.includes(query)) return venue_address.includes(query)
      //       })

      //   }

      //   const place = filter(venue, venue_search)

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
// // what needs to change
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
                <img alt='' className="navbar-image logo-image-container"/>
              </NavLink>
            </div>
                <div className="right-side-control">
              <button className="searchbar-toggle" onClick={() => toggleSearch(!searchBar)}>
                {<img alt='' className='search-icon'/>}
                search
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
