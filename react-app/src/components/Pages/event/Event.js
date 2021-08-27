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
  const ticket = useSelector(state => (state?.tickets_reducer));
  const event = useSelector(state => (state?.events_reducer?.events));

  console.log('=================ev===========================',event)


  const dispatch = useDispatch();
  const history = useHistory()


  useEffect( async () => {
    dispatch(all_tickets())
    dispatch(one_event(eventId?.eventId))
    dispatch(one_ticket(eventId?.eventId))

  }, [])

  let venue_content = null


  return (
        <>
          <CovBar/>
            <h1>{event?.events[0].id}</h1>
            {/* <h1>{ticket?.tickets[0]?.id}</h1> */}
          <FooterBar/>
        </>
  );
};

export default EachEvent;
