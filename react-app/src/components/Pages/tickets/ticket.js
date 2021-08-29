import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory, Link } from 'react-router-dom';
import * as actiontickets from '../../../store/ticket';
import CovBar from '../../NavBar/CovBar/CovBar';
import FooterBar from '../../NavBar/Footer/Footer';
import { all_user_follows } from '../../../store/follower';
import { one_user_info } from '../../../store/session';

import moment from 'moment';

import './Tickets.css'

const TicketPage = () => {
  const [errors, setErrors] = useState([]);

  const user = useSelector(state => state.session.user)
  const tickets = useSelector(state => (state?.tickets_reducer?.tickets));
  const following = useSelector(state => (state?.followers_reducer?.followers));


  const dispatch = useDispatch();
  const history = useHistory()


  useEffect( async () => {
    dispatch(actiontickets.all_tickets())
    dispatch(all_user_follows(Number(user.id)))
    dispatch(one_user_info(1))

  }, [])

  const runonce = () => {
    dispatch(actiontickets.all_tickets())
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


const unregisterforthisevent = async (e) => {
  e.preventDefault()
  await dispatch(actiontickets.delete_ticket(e.target.value))
}

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
          <div className='register-button-container'>
            <button type='button' className="unregister-tickets-page" value={tix.id} onClick={(e) => unregisterforthisevent(e)}>Unregister</button>
          </div>
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
                        <p className="user-stats">{tickets?.length} orders</p>
                        <p> * </p>
                        <p className="user-stats">0 likes</p>
                        <p> * </p>
                        <p className="user-stats">{following?.length} following</p>
                    </div>
                  </div>
                </div>
                <div className='ticket-info-card' >
                  <div className="users-boxes">
                    <h3>Orders {`>`}</h3>
                  {tickets?.length ?  some_content : (none_content, runonce())}
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
