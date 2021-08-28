import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory, Link, useParams } from 'react-router-dom';
import { all_tickets } from '../../../store/ticket';
import CovBar from '../../NavBar/CovBar/CovBar';
import FooterBar from '../../NavBar/Footer/Footer';
import { one_event } from '../../../store/event';
import * as actiontickets from '../../../store/ticket';

import moment from 'moment';

import './Event.css'

const EachEvent = () => {
  const eventId = useParams()
  const [errors, setErrors] = useState([]);
  const [panel, setPanel] = useState(false);

  const user = useSelector(state => state.session.user)
  const ticket = useSelector(state => (state?.tickets_reducer?.tickets));
  const event = useSelector(state => (state?.events_reducer?.events));

  const dispatch = useDispatch();
  const history = useHistory()

  useEffect( async () => {
    dispatch(actiontickets.one_ticket(eventId?.eventId))
    await dispatch(one_event(eventId?.eventId))

  }, [])

  const runonce = () => {
    dispatch(actiontickets.one_ticket(eventId?.eventId))
  }

  if (!ticket) {
    runonce()
  }

// This is my ticket modal which pops up when green 'ticket' is pressed

  let ticket_panel = null

  const registerforthisevent = async (e) => {
    e.preventDefault()
    let id = event?.events[0]?.id
    await dispatch(actiontickets.create_ticket( id ))
    runonce()
  }

  const unregisterforthisevent = async (e) => {
    e.preventDefault()
    await dispatch(actiontickets.delete_ticket(ticket[0]?.id))
    runonce()
  }

  if (panel) {
    ticket_panel = (
      <>
      <div className='ticket-panel-container'>
        <div className='ticketing-panel'>
          <div className='general-ticketing-panel'>
            <div className='ticketing-panel-title'>{event?.events[0]?.name} <div className='title-datetimestamp'>{moment(event?.events[0]?.start_time).format('ddd, MMMM do, YYYY [at] h:mm A')}</div></div>
            <div className='ticketing-panel-info'>
              VIP Pass
              <p className='ticket-small-print'>Please text 202-830-2776 to confirm a reservation for your ticket. RSVP does not guarantee a reservation for seating. Admission prices/times are subject to change based on demand, special events, and/or holiday weekends.</p>
            </div>
            <div className='ticketing-panel-info'>
              Advanced Ticketing
              <p className='ticket-small-print'>Advanced ticket purchase highly suggested.  Limited amount of tickets will be available the day of for a higher price due to capacity limitations at the venues.</p>
            </div>
            <div className='ticketing-panel-info'>
              General Admission (Door)
              <p className='ticket-small-print'>Event Admission; Express Check-In; Non-Refundable; Call For VIP Table Service</p>

            </div>
            <div className='register-button-contaienr'>
          <div className='registering-buttons'>
            {ticket?.length ? <button onClick={(e) => unregisterforthisevent(e)} className="unregister-button">unregister</button> : <button onClick={(e) => registerforthisevent(e)} className="register-button">register</button> }
          </div>
            </div>
          </div>
          <div>
              <div className='ticket-image-container'>
                  <img className='ticketing-image' src={event?.events[0]?.image}/>
                  <button onClick={() => setPanel(!panel) } className="ticket-cancel-button">X</button>
              </div>
            <div className='ticketing-calculate-panel'>
                <div className='cost-panel'>
                    {event?.events[0]?.cost ? <p>This isdasssssssdhabsdkjbksbnaksads</p> : <h2>this event is free you cheap shit</h2>}

                  </div>
            </div>

          </div>
        </div>
      </div>
      </>
    )
  }






  return (
        <>
          <div className='event-page-topcard'>
            <div className='event-page-img-container'>
              <img className='event-page-img'src={event?.events[0]?.image}/>
            </div>
            <div className="event-page-card">
              <div>
                <p>{moment(event?.events[0]?.start_time).format('MMM do')}</p>
                {(event?.events[0]?.name.toString().length > 50) ? <p className='events-page-card-naem-long'>{event?.events[0]?.name}</p> : <p className='events-page-card-naem-short'>{event?.events[0]?.name}</p> }
                {(event?.events[0]?.name.toString().length > 100) ? <p className='events-page-card-naem-very-long'>{event?.events[0]?.name}</p> : null /*<p className='events-page-card-naem-short'>{event?.events[0]?.name}</p> */ }
                <p className='event-card-basic-info event-name-info'>By: {event?.events[0]?.host?.first_name} {event?.events[0]?.host?.last_name} </p>
                <p className='event-card-basic-info'>Contact: {event?.events[0]?.host?.email} </p>
                <p className='follower-number'>0 followers {<button className='follow-me-button'>follow</button>}</p>
                {event?.events[0]?.cost ? <p className='ticket-prices-start'>Tickets start at: ${event?.events[0]?.cost}</p> : <p className='ticket-prices-start'>Free</p>}
              </div>
            </div>
          </div>
          <div className="purchase-tix-bar">
            <button type='button' onClick={() => (setPanel(!panel))} className='ticket-button'>Tickets</button>
          </div>
          <div className='event-page-bot-grid'>
            <div className='events-main-cont-container'>
              <div className='events-main-cont'>
                <div class='events-description-text'>
                  <p>
                    {moment(event?.events[0]?.start_time).format('MMM do')}
                    - SINGLE DAY PASS - One (1) general admission RSVP to attend
                  {event?.events[0]?.name} in {event?.events[0]?.venue?.city},
                  {event?.events[0]?.venue?.state}.
                  </p>
                  <h2 className="events-description-innertext">About this event</h2>
                  <p className="events-description-innertext">{event?.events[0]?.description}</p>
                  <div className="tags">Tags</div>
                </div>
              </div>
            </div>
            <div className='side-panel-container'>
              <div className='event-page-sidepanel'>
                  <div className="events-info-label">
                    <p>Capacity:</p>
                  </div>
                  <div className='events-address-para'>
                    <p>{event?.events[0]?.capacity}</p>
                  </div>
                  <div className="events-info-label">
                    <p>Category:</p>
                  </div>
                  <div className='events-address-para'>
                    <p>{event?.events[0]?.category?.type}</p>
                  </div>
                  <p>Date and time</p>
                  <p>Starts: </p>
                  <p>{moment(event?.events[0]?.start_time).format('ddd, MMMM do, YYYY [at] h:mm A')}</p>
                  <p>Ends:</p>
                  <p>{moment(event?.events[0]?.end_time).format('ddd, MMMM do, YYYY [at] h:mm A')}</p>
                  <p className="events-address-label">Location:</p>
                  <div className='events-page-location'>
                    <p className="events-address-para">{event?.events[0]?.venue?.name}</p>
                    <p className="events-address-para">{event?.events[0]?.venue?.address}</p>
                    <p className="events-address-para">{event?.events[0]?.venue?.city}, {event?.events[0]?.venue?.state}</p>
                    <p className="events-address-para">{event?.events[0]?.venue?.zip_code}</p>
                    <p className="events-address-para">Lat: {event?.events[0]?.venue?.latitude} Lon: {event?.events[0]?.venue?.longitude} </p>
                    <button>view map</button>
                  </div>
                  <p className="events-address-label">Refund Policy: </p>
                  <p  className="events-address-para">Contact the organizer to request a refund. Adventure Time's fee is nonrefundable. </p>
              </div>
            </div>
          </div>

            {ticket_panel}

          <FooterBar/>
        </>
  );
};

export default EachEvent;
