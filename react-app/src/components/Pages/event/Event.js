import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory, Link, useParams } from 'react-router-dom';
import { all_tickets } from '../../../store/ticket';
import CovBar from '../../NavBar/CovBar/CovBar';
import FooterBar from '../../NavBar/Footer/Footer';
import { one_event } from '../../../store/event';
import { one_ticket } from '../../../store/ticket';

import moment from 'moment';

import './Event.css'

const EachEvent = () => {
  const eventId = useParams()
  const [errors, setErrors] = useState([]);

  const user = useSelector(state => state.session.user)
  const ticket = useSelector(state => (state?.tickets_reducer?.tickets));
  const event = useSelector(state => (state?.events_reducer?.events));

  const dispatch = useDispatch();
  const history = useHistory()


  useEffect( async () => {
    dispatch(one_ticket(eventId?.eventId))
    dispatch(one_event(eventId?.eventId))

  }, [])

  let venue_content = null
  let content = null

  ticket?.map(tx=> {
    if (tx?.event) {
      content = (

        <>
          <button className="unregister-button">unregister</button>
          <p>{ticket?.[0]?.event?.name} </p>
          <p>{ticket?.[0]?.event?.capacity} </p>
          <p>{ticket?.[0]?.event?.name} </p>
          <p>{ticket?.[0]?.event?.name} </p>
          </>
      )
    } else {
      content = (
        <>
        <button className="register-button">register</button>

        </>
      )
    }
  })

  return (
        <>
            <div className='event-page-img'>
              <img src={event?.events[0]?.image}/>
            </div>
            <div className="event-page-card">
              <h1>{event?.events[0]?.start_time}</h1>
              <h1>{event?.events[0]?.name}</h1>
              <h1>0 followers</h1> <button>follow</button>
              <h1>{event?.events[0]?.cost}</h1>

            </div>
          <CovBar/>
          <div className='events-main-cont'>
            <h1>{event?.events[0]?.description}</h1>
          </div>
            <h1>{event?.events[0]?.capacity}</h1>
            <h1>{event?.events[0]?.category?.type}</h1>
            <h1>{event?.events[0]?.start_time}</h1>
            <h1>{event?.events[0]?.end_time}</h1>
            <h1>{event?.events[0]?.venue?.name}</h1>
            <h1>{event?.events[0]?.venue?.address}</h1>
            <h1>{event?.events[0]?.venue?.city}</h1>
            <h1>{event?.events[0]?.venue?.state}</h1>
            <h1>{event?.events[0]?.venue?.zip_code}</h1>
            <h1>{event?.events[0]?.venue?.latitude}</h1>
            <h1>{event?.events[0]?.venue?.longitude}</h1>
            <button>view map</button>
            <h1>Refund Policy: </h1>
            <p>Contact the organizer to request a refund. Adventure Time's fee is nonrefundable. </p>


            {ticket ? content :  <button className="register-button">register</button>}
          <FooterBar/>
        </>
  );
};

export default EachEvent;
