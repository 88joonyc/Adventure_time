import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory } from 'react-router-dom';
import { all_tickets } from '../../../store/ticket';
import CovBar from '../../NavBar/CovBar/CovBar';

import './Tickets.css'

const TicketPage = () => {
  const [errors, setErrors] = useState([]);

  const user = useSelector(state => state.sesssion)
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
        </>
  );
};

export default TicketPage;
