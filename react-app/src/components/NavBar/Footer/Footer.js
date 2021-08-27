
import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './Footer.css'

const FooterBar = () => {
  const sessionUser = useSelector(state => state.session.user)


  let content = null

  if (false) {
    content = (
    <>

    </>
    )
  } else {
      content = (

        <>
        <nav>
          <div className="footer-container">
            <div className="footer-tabs">
              <div className="footer-one">
                <ul>
                  <p className="footer-title">School</p>
                  <li>this</li>
                  <li>this</li>
                  <li>this</li>
                  <li>this</li>
                </ul>
              </div>
              <div className="footer-two">
                <ul>
                  <p className="footer-title">work</p>
                  <li>this</li>
                  <li>this</li>
                  <li>this</li>
                  <li>this</li>
                </ul>
              </div>
              <div className="footer-three">
                <ul>
                  <p className="footer-title">Bio</p>
                  <li>this</li>
                  <li>this</li>
                  <li>this</li>
                  <li>this</li>
                  <li>this</li>
                </ul>
              </div>
              <div className="footer-four">
                <ul>
                  <p className="footer-title">Linked</p>
                  <li>this</li>
                  <li>this</li>
                  <li>this</li>
                  <li>this</li>
                </ul>
              </div>
            </div>
              <div className='Footer-message'>© 2021 Adventure Time. All Rights Reserved. Terms. Privacy Policy. California Privacy Notice. Cookies.  <Link to='/https://www.linkedin.com/in/pchang1216'>Linkedin</Link> </div>
            </div>

      </nav>

      </>
    )
  }

  return (
    <>
      {content}
    </>
  );
}

export default FooterBar;
