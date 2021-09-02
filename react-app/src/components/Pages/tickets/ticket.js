import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  Link } from 'react-router-dom';
import * as actiontickets from '../../../store/ticket';
import CovBar from '../../NavBar/CovBar/CovBar';
import FooterBar from '../../NavBar/Footer/Footer';
import { all_user_follows } from '../../../store/follower';
import { authenticate } from '../../../store/session';
import { hearted_events } from '../../../store/heart';

import moment from 'moment';

import './Tickets.css'

const TicketPage = () => {
  // const [errors, setErrors] = useState([]);
  const [orders, toggleOrders] = useState(true);
  const [hearted, toggleHearts] = useState(false);
  const [follow, toggleFollow] = useState(false);

  const user = useSelector(state => state.session.user)
  const tickets = useSelector(state => (state?.tickets_reducer?.tickets));
  const hearts = useSelector(state => (state?.hearts_reducer?.hearts));
  const follows = useSelector(state => (state?.followers_reducer.followers));

  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(actiontickets.all_tickets())
    dispatch(all_user_follows())
    dispatch(hearted_events())
  }, [dispatch])

  const runonce = () => {
    dispatch(actiontickets.all_tickets())
    dispatch(authenticate())
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

const cold_hearted = (
    <>
      <div className="no-tix-cont">
        <div className="no-tix">
          <img className='no-hearts-img'/>
          <h2>No events hearted</h2>

        </div>
      </div>
    </>
  )


const unregisterforthisevent = async (e) => {
  e.preventDefault()
  await dispatch(actiontickets.delete_ticket(e.target.value))
  runonce()
}

// ===========================================ordered_content===========================================================================



const some_content = (
  <>
    {tickets?.map(tix=> (
      <Link key={tix?.id} to={`/event/${tix?.event_id}`} className='tix-link'>
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
  </>)


// ===========================================hearted===========================================================================


const heart_content = (
  <>
    {hearts?.map(heart=> (
      <Link key={heart?.id} to={`/event/${heart?.event?.id}`} className='tix-link'>
          <div className="ticket-card">
            <img className="tix-card-img" src={heart?.event?.image}/>
            <div className='tix-card-info'>
              <p className='tix-date'>{moment(heart?.event?.start_time).format('ddd, MMM Do, [at] LT')}</p>
              <p className='tix-title'>{heart?.event?.name}</p>
            </div>
            {/* <div className='register-button-container'>
              <button type='button' className="unregister-tickets-page" value={tix.id} onClick={(e) => unregisterforthisevent(e)}>Unregister</button>
            </div> */}
          </div>
      </Link>
    ))}
  </>
)
// ===========================================hearted===========================================================================

const follow_content = (
  <>
    {follows?.map( heart =>
      // {/* // <Link to={`/event/${heart?.event?.id}`} className='tix-link'> */}
          <div className="ticket-card">
            <img className="tix-card-img" src={follow?.user?.image}/>
            <div className='tix-card-info'>
              {/* <p className='tix-date'>{moment(heart?.event?.start_time).format('ddd, MMM Do, [at] LT')}</p> */}
              {/* <p className='tix-title'>{heart?.event?.name}</p> */}
            </div>
            <div className='register-button-container'>
              {/* <button type='button' className="unregister-tickets-page" value={''} onClick={(e) => unregisterforthisevent(e)}>Unregister</button> */}
            </div>
          </div>
      // {/* // </Link> */}
    )}
  </>
)

  return (
        <>
          <CovBar/>
          <div className="ticket-container">
            <div className='ticker-grid'>
                <div className="user-info-card">
                  <img className="profile-img" src={user?.image}/>
                  <div className="user-card-text" >
                    <div className="card-name">
                      <p className='name'>{user?.first_name}</p>
                      <p className='name'>{user?.last_name}</p>
                    </div>
                    <div className="user-marks">
                        <p className="user-stats">{user.tickets?.length} orders</p>
                        <p> * </p>
                        <p className="user-stats">{user.hearts?.length} hearts</p>
                        <p> * </p>
                        <p className="user-stats">{user.following?.length} following</p>
                    </div>
                  </div>
                </div>
                <div className='ticket-info-card' >
                  <div className="users-boxes">
                    <button type='button' onClick={() => toggleOrders(!orders)} className='orders-toggle'><h3>Orders {`>`}</h3></button>
                  {tickets ?  ( orders ? some_content : null ) : none_content }
                  </div>
                  <div className="users-boxes">
                    <button type='button' onClick={() => toggleHearts(!hearted)} className='orders-toggle'><h3>Hearts {`>`}</h3></button>
                  {hearts ?  ( hearted ? heart_content : null ) : cold_hearted }
                  </div>
                  <div className="users-boxes">
                      <button type='button' onClick={() => toggleFollow(!follow)} className='orders-toggle'><h3>Follows {`>`}</h3></button>
                  {follows ?  ( follow ? follow_content : null ) : cold_hearted }
                  </div>
                </div>
            </div>
          </div>

          <FooterBar/>
        </>
  );
};

export default TicketPage;
