import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory, Link } from 'react-router-dom';
import { all_tickets } from '../../../store/ticket';
import CovBar from '../../NavBar/CovBar/CovBar';
import FooterBar from '../../NavBar/Footer/Footer';

import moment from 'moment';

import './Tickets.css'

const TicketPage = () => {
  const [errors, setErrors] = useState([]);

  const user = useSelector(state => state.session.user)
  const tickets = useSelector(state => (state?.tickets_reducer?.tickets));


  const dispatch = useDispatch();
  const history = useHistory()


  useEffect( async () => {
    dispatch(all_tickets())

  }, [all_tickets])

  const runonce = () => {
    dispatch(all_tickets())
  }

const none_content = (
    <>
      <div className="no-tix-cont">
        <div className="no-tix">
          <img className='no-tickets-img'/>
          <h2>No upcoming orders</h2>

        </div>
      </div>
    </>
  )

const some_content = (
    <>
      {tickets?.map(tix=> (
    <Link to={`/event/${tix.event_id}`} className='tix-link'>
        <div className="ticket-card">
          <img className="tix-card-img" src={tix.event.image}/>
          <div className='tix-card-info'>
            <p className='tix-date'>{moment(tix.event.start_time).format('ddd, MMM Do, [at] LT')}</p>
            <p className='tix-title'>{tix.event.name}</p>
          </div>
          <button>some buttom</button>
        </div>
    </Link>
      ))}
  </>
  )

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
                    <h3>Orders {`>`}</h3>
                  {tickets ?  some_content : (none_content, runonce())}
                  </div>
                  <div className="users-boxes">
                    <h3>Interests {`>`}</h3>
                  </div>
                  <div className="users-boxes">
                    <h3>Collection {`>`}</h3>
                  </div>
                </div>
            </div>
          </div>

          <FooterBar/>
        </>
  );
};

export default TicketPage;
