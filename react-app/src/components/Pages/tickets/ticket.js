import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory } from 'react-router-dom';
import { all_tickets } from '../../../store/ticket';
import CovBar from '../../NavBar/CovBar/CovBar';
import FooterBar from '../../NavBar/Footer/Footer';

import './Tickets.css'

const TicketPage = () => {
  const [errors, setErrors] = useState([]);

  const user = useSelector(state => state.session.user)
  const tickets = useSelector(state => (state?.tickets_reducer?.tickets));


  const dispatch = useDispatch();
  const history = useHistory()


  useEffect( async () => {
    dispatch(all_tickets())

  }, [])

  let venue_content = null


  return (
        <>
          <CovBar/>
          <div className="ticket-container">
            <div className='ticker-grid'>
                <div className="user-info-card">
                  <img className="profile-img" src={user.image}/>
                  <div className="user-card-text" >
                    <div className="card-name">
                      <p className='name'>{user.first_name}</p>
                      <p className='name'>{user.last_name}</p>
                    </div>
                    <div className="user-marks">
                        <p className="user-stats">0 orders</p>
                        <p> * </p>
                        <p className="user-stats">0 likes</p>
                        <p> * </p>
                        <p className="user-stats">0 following</p>
                    </div>
                  </div>
                </div>
                <div className='ticket-info-card' >
                  <div className="users-boxes">
                    <h3>Orders ></h3>
                  {tickets?.map(tix=> (
                    <h1>{tix.id}</h1>
                  ))}
                  </div>
                  <div className="users-boxes">
                    <h3>Interests ></h3>
                  </div>
                  <div className="users-boxes">
                    <h3>Collection ></h3>
                  </div>
                </div>
            </div>
          </div>

          <FooterBar/>
        </>
  );
};

export default TicketPage;
