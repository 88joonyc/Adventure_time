import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory, Link, useParams } from 'react-router-dom';
import { all_tickets } from '../../../store/ticket';
import CovBar from '../../NavBar/CovBar/CovBar';
import FooterBar from '../../NavBar/Footer/Footer';
import { one_event } from '../../../store/event';
import * as actiontickets from '../../../store/ticket';
import * as actionfollowers from '../../../store/follower';

import moment from 'moment';

import './Event.css'

const EachEvent = () => {
  const eventId = useParams()
  const [errors, setErrors] = useState([]);
  const [panel, setPanel] = useState(false);
  const [ticketqty, setTicketQty] = useState(0)
  const [tier, setTier] = useState('')
  const [multiplier, setMultiplier] = useState('')
  const [overload, toggleOverload] = useState('false')

  const user = useSelector(state => state.session.user)
  const ticket = useSelector(state => (state?.tickets_reducer?.tickets));
  const event = useSelector(state => (state?.events_reducer?.events));
  const follower = useSelector(state => (state?.followers_reducer?.followers));

  const dispatch = useDispatch();
  const history = useHistory()

  useEffect( async () => {
    dispatch(actiontickets.one_ticket(eventId?.eventId))
    await dispatch(one_event(eventId?.eventId))
    await dispatch(actionfollowers.get_follower_with_promo(eventId?.eventId))

  }, [eventId])

  const runonce = () => {
    dispatch(actiontickets.one_ticket(eventId?.eventId))
    dispatch(actionfollowers.get_follower_with_promo(eventId?.eventId))

  }

  if (!ticket) {
    runonce()
  }

// This is my ticket modal which pops up when green 'ticket' is pressed

  let ticket_panel = null

  const registerforthisevent = async (e) => {
    e.preventDefault()
    const id = event?.events[0]?.id
    const message = window.confirm(`Are you sure you want to purchase ${ticketqty} tickets for $${(ticketqty * event?.events[0]?.cost + ticketqty * event?.events[0]?.cost * .15) * multiplier}?`)
    if (message) {
      await dispatch(actiontickets.create_ticket(id))
      window.alert("purchase has been made!")
      setPanel(!panel)
    }
    runonce()
  }

  const unregisterforthisevent = async (e) => {
    e.preventDefault()
    await dispatch(actiontickets.delete_ticket(ticket[0]?.id))
    runonce()
  }

  window.addEventListener("click", () => {
    setMultiplier('')
    setTier('')
    // toggleOverload(!overload)
    setTicketQty(0)

  })

  // ===========================================register===========================================================================

  let shoppingcart = (
    <>
    <div className='shopping-cart'>
      <img className="no-quantity-shopping"/>
    </div>
    </>
  )

  let thispaypanel = (
    <>
    <div className='payslip'>
      <p className='order-summary'>Order summary</p>
      <p className='order-summary-calc'>{ticketqty} X {tier} tickets ${event?.events[0]?.cost}</p>
      <div className='subtotal-summary'>
        <p className='text'>Subtotal</p>
        <p className='text'>${multiplier* ticketqty * event?.events[0]?.cost} </p>
      </div>
      <div className='subtotal-summary fee-bottom'>
      <p className='text'>Fees  </p>
      <p className='text'>${multiplier * ticketqty * event?.events[0]?.cost * .15}  </p>
      </div>
      <div className='subtotal-summary'>
          <p>Total </p>
          <p>${(ticketqty * event?.events[0]?.cost + ticketqty * event?.events[0]?.cost * .15) * multiplier}  </p>
      </div>
    </div>
    </>
  )

  let paypanel = null

  if (overload) {
    paypanel = ( (/*!event?.events[0]?.cost &&*/ ticketqty) ? thispaypanel : shoppingcart )
  } else {
    paypanel = shoppingcart
  }

// ===========================================shopping===========================================================================

  if (panel) {
    ticket_panel = (
      <>
      <div className='ticket-panel-container'>
        <div className='ticketing-panel'>
          <div className='general-ticketing-panel'>
            <div className='ticketing-panel-title'>{event?.events[0]?.name} <div className='title-datetimestamp'>{moment(event?.events[0]?.start_time).format('ddd, MMMM do, YYYY [at] h:mm A')}</div></div>
            <div className='ticketing-panel-info'>
              VIP Pass
              <p className='ticket-small-print'>Please call to confirm a reservation for your ticket. RSVP does not guarantee a reservation for seating. Admission prices/times are subject to change based on demand, special events, and/or holiday weekends.</p>
                {!ticket?.length ? (
                <select className='selecter' onChange={(e) => (setTicketQty(e.target.value), setTier('VIP Pass'), setMultiplier(25)) }>
                <option value='0'> - select quantity - </option>
                <option value='1'> - 1 - </option>
                <option value='2'> - 2 - </option>
                <option value='3'> - 3 - </option>
                <option value='4'> - 4 - </option>
                <option value='5'> - 5 - </option>
                <option value='6'> - 6 - </option>
                <option value='7'> - 7 - </option>
                <option value='8'> - 8 - </option>
                <option value='9'> - 9 - </option>
                <option value='10'> - 10 - </option>
                {/* {(n = 1) => {
                  while (n <= 10) {
                    <option value={n}> - {n} - </option>
                    n += 1
                  }
                }} */}
              </select>)  : null}
            </div>
            <div className='ticketing-panel-info'>
              Advanced Ticketing
              <p className='ticket-small-print'>Advanced ticket purchase highly suggested.  Limited amount of tickets will be available the day of for a higher price due to capacity limitations at the venues.</p>
                {!ticket?.length ? (
                <select onChange={(e) => (setTicketQty(e.target.value), setTier('Advanced Ticketing'), setMultiplier(2))}>
                <option value='0'> - select quantity - </option>
                <option value='1'> - 1 - </option>
                <option value='2'> - 2 - </option>
                <option value='3'> - 3 - </option>
                <option value='4'> - 4 - </option>
                <option value='5'> - 5 - </option>
                <option value='6'> - 6 - </option>
                <option value='7'> - 7 - </option>
                <option value='8'> - 8 - </option>
                <option value='9'> - 9 - </option>
                <option value='10'> - 10 - </option>
                {/* {(n = 1) => {
                  while (n <= 10) {
                    <option value={n}> - {n} - </option>
                    n += 1
                  }
                }} */}
              </select>)  : null}
            </div>
            <div className='ticketing-panel-info'>
              General Admission (Door)
              <p className='ticket-small-print'>Event Admission; Express Check-In; Non-Refundable; Call For VIP Table Service</p>
              {!ticket?.length ? (
              <select onChange={(e) => (setTicketQty(e.target.value), setTier("General Admission"), setMultiplier(1))}>
                <option value='0'> - select quantity - </option>
                <option value='1'> - 1 - </option>
                <option value='2'> - 2 - </option>
                <option value='3'> - 3 - </option>
                <option value='4'> - 4 - </option>
                <option value='5'> - 5 - </option>
                <option value='6'> - 6 - </option>
                <option value='7'> - 7 - </option>
                <option value='8'> - 8 - </option>
                <option value='9'> - 9 - </option>
                <option value='10'> - 10 - </option>
                {/* {(n = 1) => {
                  while (n <= 10) {
                    <option value={n}> - {n} - </option>
                    n += 1
                  }
                }} */}
              </select>)  : null}

            </div>
            <div className='register-button-contaienr'>
          <div className='registering-buttons'>
            {ticket?.length ? <button onClick={(e) => unregisterforthisevent(e)} className="unregister-button">unregister</button> : ticketqty ? <button onClick={(e) => registerforthisevent(e)} className="register-button">register</button> : null }
          </div>
            </div>
          </div>
          <div>
              <div className='ticket-image-container'>
                  <button onClick={() => setPanel(!panel) } className="ticket-cancel-button">X</button>
                  <img className='ticketing-image' src={event?.events[0]?.image}/>
              </div>
            <div className='ticketing-calculate-panel'>
                <div className='cost-panel'>
                    {paypanel}

                  </div>
            </div>

          </div>
        </div>
      </div>
      </>
    )
  }


  // ===========================================map===========================================================================


  let map_panel = (
    <>
    <div className='map-info-container'>


        <div>
          <div className='map-info-marker'>
            <div>
              <div className='map-info-marker'>hi</div>
            </div>
            <div>
              <div className='map-info-marker'>hi</div>
            </div>
            <div>
              <div className='map-info-marker'>hi</div>
            </div>
          </div>
        </div>

        <div>
          <div className='map-info-map'>map

           <div style={{ height: '50vh', width: '90%' }}>

      </div>


          </div>
        </div>
        <div>
          <div className='map-info-map'>hi</div>
        </div>
        <div>
          <div className='map-info-map'>hi</div>
        </div>

        <div className='map-info-marker'>
          <div>
            <div className='map-info-marker'>hi</div>
          </div>
          <div>
            <div className='map-info-marker'>hi</div>
          </div>
          <div>
            <div className='map-info-marker'>hi</div>
          </div>
        </div>
    </div>
    </>
  )



// this is my api key  in react root .env


// ===========================================follow/unfollow===========================================================================


const follow = async () => {
  const  following = await dispatch(actionfollowers.follow(event?.events[0]?.id))
  if (following) {
    runonce()
  }
}


const unfollow = async () => {
  const unfollowing = await dispatch(actionfollowers.leave_loser(event?.events[0]?.id))
  if (unfollowing) {
    runonce()
  }
}



// ===========================================return===========================================================================
  return (
        <>
          <div className='event-page'>
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
                  <p className='follower-number'>{event?.events[0]?.followers?.length} followers { follower ? <button onClick={() => unfollow() } className='unfollow-me-button'>unfollow</button> : <button onClick={() => follow()} className='follow-me-button'>follow</button> }</p>
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
                    <h2 className="events-description-label">About this event</h2>
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
          </div>
          {/* {// ===========================================insert===========================================================================} */}
            {map_panel}

            {ticket_panel}

          <FooterBar/>
        </>
  );
};

export default EachEvent;
