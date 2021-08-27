import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory, Link, useParams } from 'react-router-dom';
import { all_tickets } from '../../../store/ticket';
import CovBar from '../../NavBar/CovBar/CovBar';
import FooterBar from '../../NavBar/Footer/Footer';
import { one_event } from '../../../store/event';

import moment from 'moment';

import './Event.css'

const EachEvent = () => {
  const eventId = useParams()
  const [errors, setErrors] = useState([]);

  const user = useSelector(state => state.session.user)
  const tickets = useSelector(state => (state?.tickets_reducer?.tickets));


  const dispatch = useDispatch();
  const history = useHistory()


  useEffect( async () => {
    dispatch(all_tickets())
    dispatch(one_event(1))

  }, [])

  let venue_content = null


  return (
        <>
          <CovBar/>


          <FooterBar/>
        </>
  );
};

export default EachEvent;
