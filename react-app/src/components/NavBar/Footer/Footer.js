
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
                  <p className="footer-title">GitHub</p>
                  <li className="footer-lists">See how it works:</li>
                  <li> <a className="footer-linked" href="https://github.com/88joonyc/Adventure_time">Download</a> </li>
                  <li className="footer-lists">this GibHub Repo</li>
                  <li className="footer-lists">Now and visit my GitHub for more!</li>
                  <li> <a className="footer-linked" href="https://github.com/88joonyc/" >My GitHub</a> </li>
                </ul>
              </div>
              <div className="footer-two">
                <ul>
                  <p className="footer-title">Special Thanks</p>
                  <li className="footer-lists">to</li>
                  <li> <a className="footer-linked" href="https://open.appacademy.io/" >App Academy</a> </li>
                  <li className="footer-lists">April Cohort</li>
                  <li className="footer-lists">2021</li>

                </ul>
              </div>
              <div className="footer-three">
                <ul>
                  <p className="footer-title">Bio</p>
                  <li className="footer-lists">My email address:</li>
                  <li className="footer-lists">joonyc88@gmail.com</li>
                </ul>
              </div>
              <div className="footer-four">
                <ul>
                  <p className="footer-title">Linked</p>
                  <li className="footer-lists">Like the Site?</li>
                  <li className="footer-lists">like me</li>
                  <li className="footer-lists">wanna visit?</li>
                  <li className="footer-lists">wanna snoop?</li>
                  <li className="footer-lists">Like snoop?</li>
                  <li className="footer-lists">Visit my Likedin below:</li>
                  <li> <a className="footer-linked" href='https:///linkedin.com/in/pchang1216'>here</a> </li>
                </ul>
              </div>
            </div>
              <div className='footer-message'>© 2021 Adventure Time. All Rights Reserved by Paul Chang. Terms. Privacy Policy. New Jersy Privacy Notice. Cookies. </div>
            <div className='footer-footer'>
              <div className="my-links">1</div>
              <div className="my-links">2</div>
              <div className="my-links">3</div>
              <div className="my-links">4</div>
            </div>
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
