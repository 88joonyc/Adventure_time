import React from 'react';

import './Footer.css'

const FooterBar = () => {

  let content = (

      <>
      <nav>
        <div className="footer-container">
          <div className="footer-tabs">
            <div className="footer-one">
              <ul>
                <p className="footer-title">About</p>
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
                <p className="footer-title">Linked</p>
                <li className="footer-lists">My email address:</li>
                <li className="footer-lists">joonyc88@gmail.com</li>
                <li> <a className="footer-linked" href='https:///linkedin.com/in/pchang1216'>My Linkedin Profile</a> </li>
              </ul>
            </div>
            <div className="footer-four">
              <ul>
                <p className="footer-title">Others</p>
                <li className="footer-lists">Like the Site?</li>
                <li className="footer-lists">like the project?</li>
                <li className="footer-lists">Check out past projects below</li>
                <li> <a className="footer-linked" href='https://sneaxs.herokuapp.com/'> - Sneax - </a> </li>
                <li> <a className="footer-linked" href='https://air-land-n-sea.herokuapp.com/login'> - Air land n Sea - </a> </li>
                <li> <a className="footer-linked" href='https://thefastandthecurious.herokuapp.com/'> - theFastandtheCurious - </a> </li>
              </ul>
            </div>
          </div>
            <div className='footer-message'>© 2023 Adventure Time. All Rights Reserved by Paul Chang. Terms. Privacy Policy. New Jersy Privacy Notice. Cookies. </div>
          <div className='footer-footer'>
            <a href='https://www.github.com/88joonyc' className="my-links"><img className='git-icon'/></a>
            <a href='https://angel.co/u/_paulchang_' className="my-links"><img className='angel-icon personal-set'/></a>
            <a href='mailto:joonyc88@gmail.com' className="my-links"><img className='email-icon personal-set'/></a>
            <a href='https://linkedin.com/in/pchang1216' className="my-links"><img className='linked-icon personal-set'/></a>
          </div>
          </div>

      </nav>

      </>
    )

  return (
    <>
      {content}
    </>
  );
}

export default FooterBar;
