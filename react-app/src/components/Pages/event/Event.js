import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  Link, useParams, useHistory } from 'react-router-dom';
// import { all_tickets } from '../../../store/ticket';
// import CovBar from '../../NavBar/CovBar/CovBar';
import FooterBar from '../../NavBar/Footer/Footer';
import { one_event, delete_event, edit_event, edit_event_capacity } from '../../../store/event';
import * as actiontickets from '../../../store/ticket';
import * as actionfollowers from '../../../store/follower';
import { all_categories } from '../../../store/category';
import { all_venues } from '../../../store/venue';

import Map from '../../Map/Map'

import moment from 'moment';

import './Event.css'

const EachEvent = () => {
  const eventId = useParams()
  const [panel, setPanel] = useState(false);
  const [ticketqty, setTicketQty] = useState(0)
  const [tier, setTier] = useState('')
  const [multiplier, setMultiplier] = useState('')
  const [overload, /*toggleOverload*/] = useState('false')

  const history = useHistory()

  const user = useSelector(state => state.session.user)
  const ticket = useSelector(state => (state?.tickets_reducer?.tickets));
  const event = useSelector(state => (state?.events_reducer?.events));
  const follower = useSelector(state => (state?.followers_reducer?.followers));
  const venue = useSelector(state => (state?.venues_reducer?.venues));
  const category = useSelector(state => (state?.categories_reducer?.categories));


  const [editForm, toggleEdit] = useState(false)
  // const [eventId, setId] = useState([]);
  const [venue_id, setVenue] = useState('');
  const [category_id, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescript] = useState('');
  const [start_time, setStart] = useState('');
  const [end_time, setEnd] = useState('');
  const [capacity, setCap] = useState('');
  const [image, setImg] = useState('');
  const [cost, setCost] = useState('');


  const dispatch = useDispatch();

  useEffect( async () => {
    dispatch(one_event(eventId?.eventId))
    dispatch(actiontickets.one_ticket(eventId?.eventId))
    dispatch(actionfollowers.get_follower_with_promo(Number(event?.events[0]?.host_id)))
    window.scrollTo({top: 0, left: 0, behavior: 'auto'})   // this take is to the top of the page
    dispatch(all_categories())
    dispatch(all_venues())

  }, [dispatch, eventId, event?.events[0]?.host_id], event)

  window.addEventListener('load' , e => {
    e.preventDefault()
    dispatch(actionfollowers.get_follower_with_promo(Number(event?.events[0]?.host_id)))
  })

  const runonce = async () => {
    dispatch(actiontickets.one_ticket(eventId?.eventId))
    dispatch(one_event(eventId?.eventId))
    dispatch(actionfollowers.get_follower_with_promo(Number(event?.events[0]?.host_id)))
    dispatch(one_event(eventId?.eventId))
  }


// This is my ticket modal which pops up when green 'ticket' is pressed
// ===========================================ticket panel===========================================================================

  let ticket_panel = null

  const registerforthisevent = async (e) => {
    e.preventDefault()
    const id = event?.events[0]?.id
    const message = window.confirm(`Are you sure you want to purchase ${ticketqty} tickets for $${(ticketqty * event?.events[0]?.cost + ticketqty * event?.events[0]?.cost * .15) * multiplier}?`)
    if (message) {
      if (ticketqty <= event?.events[0]?.capacity) {
        await dispatch(actiontickets.create_ticket(id))
        await(dispatch(edit_event_capacity((event?.events[0]?.capacity - ticketqty), eventId.eventId)))
        window.alert("purchase has been made!")
        setTicketQty('')
        setPanel(!panel)

      } else {
        window.alert('you cannot purchase that many tickets!')
      }
    }
    runonce()
  }

  const unregisterforthisevent = async (e) => {
    e.preventDefault()
    const  ask = window.confirm('Are you sure you want to miss out on this event?')
    if (ask) {
      await dispatch(actiontickets.delete_ticket(ticket[0]?.id))
      runonce()
      window.alert('Please note, refunds will take time—please be patient.')
      setPanel(!panel)
    }
  }

  // ===========================================register===========================================================================

  let shoppingcart = (
    <>
    <div className='shopping-cart'>
      <img alt='shop' className="no-quantity-shopping"/>
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

const cancelticketq = () => {
  setTicketQty('')
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
              <p className='ticket-small-print'>Please call to confirm a reservation for your ticket. RSVP does not guarantee a reservation for seating. Admission prices/times are subject to change based on demand, special events, and/or holiday weekends.</p>
                {!ticket?.length && !ticketqty? (
                <select className='selecter' onChange={(e) => (setTicketQty(e.target.value), setTier('VIP Pass'), setMultiplier(25)) }>
                <option key='00' value=''> - select quantity - </option>
                <option key='1' value='1'> - 1 - </option>
                <option key='2' value='2'> - 2 - </option>
                <option key='3' value='3'> - 3 - </option>
                <option key='4' value='4'> - 4 - </option>
                <option key='5' value='5'> - 5 - </option>     {/* this is not DRY!!!! CLEAN IT UP... later */}
                <option key='6' value='6'> - 6 - </option>
                <option key='7' value='7'> - 7 - </option>
                <option key='8' value='8'> - 8 - </option>
                <option key='9' value='9'> - 9 - </option>
                <option key='0' value='10'> - 10 - </option>
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
                {!ticket?.length && !ticketqty ?  (
                <select onChange={(e) => (setTicketQty(e.target.value), setTier('Advanced Ticketing'), setMultiplier(2))}>
                <option key='00' value=''> - select quantity - </option>
                <option key='1' value='1'> - 1 - </option>
                <option key='2' value='2'> - 2 - </option>
                <option key='3' value='3'> - 3 - </option>
                <option key='4' value='4'> - 4 - </option>
                <option key='5' value='5'> - 5 - </option>
                <option key='6' value='6'> - 6 - </option>
                <option key='7' value='7'> - 7 - </option>
                <option key='8' value='8'> - 8 - </option>
                <option key='9' value='9'> - 9 - </option>
                <option key='0' value='10'> - 10 - </option>
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
              {!ticket?.length && !ticketqty ? (
              <select onChange={(e) => (setTicketQty(e.target.value), setTier("General Admission"), setMultiplier(1))}>
                <option key='00' value=''> - select quantity - </option>
                <option key='1' value='1'> - 1 - </option>
                <option key='2' value='2'> - 2 - </option>
                <option key='3' value='3'> - 3 - </option>
                <option key='4' value='4'> - 4 - </option>
                <option key='5' value='5'> - 5 - </option>
                <option key='6' value='6'> - 6 - </option>
                <option key='7' value='7'> - 7 - </option>
                <option key='8' value='8'> - 8 - </option>
                <option key='9' value='9'> - 9 - </option>
                <option key='0' value='10'> - 10 - </option>
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
            {ticket ? <button onClick={(e) => unregisterforthisevent(e)} className="unregister-button">unregister</button> : ( Number(ticketqty) !== 0 ? <button onClick={(e) => registerforthisevent(e)} className="register-button">register</button> : null )}
            {ticketqty ? <button type='button' className='cancel-ticket-qty' onClick={(e) => cancelticketq()}>cancel</button> : null}
          </div>
            </div>
          </div>
          <div>
              <div className='ticket-image-container'>
                  <button onClick={() => setPanel(!panel) } className="ticket-cancel-button">X</button>
                  <img alt='tix' className='ticketing-image' src={event?.events[0]?.image}/>
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

// ===========================================promoter===========================================================================

let promoter_panel = (
  <>
  <h3 className='promo-title'>More events from this organizer</h3>
  <div className='promo-events-box'>
    {event?.events[0]?.promoter?.map(event=> (
      <>
      {/* {event.id != eventId?.eventId ? ( */}

        <Link key='1' className='link-add' to={`/event/${event?.id}`}>
        <div className='promoter-events'>
          <div className='promoter-events-img-container'>
            <img alt='' className='promoter-event-img' src={event?.image}></img>
            {event?.cost ? <p className='promoter-event-img-text'> $0 - ${event?.cost}</p> : <p  className='promoter-event-img-text'>FREE</p>}
          </div>
          <div className='promoter-event-info'>
            <div className='promoter-event-info-content'>
              <p className='promoter-event-date'>{moment(event?.start_time).format("ddd, MMM do [at] h:mm A")}</p>
              <p className='promoter-event-name'>{event?.name}</p>
            </div>
          </div>
        </div>
      </Link>

      {/* // ) : null } */}  {/*  <  this allows for only other events to be showns and not current.. seeds are empty so leave for now. */}
      </>
    ))}
    <div className='the-real-map'/>
  </div>


  </>
)

  // ===========================================map===========================================================================

//====================================== in MapCard.css of events

  let map_panel = (
    <>
    <div className='map-info-container'>


        <div>
          <div className='map-info-marker map-info-marker-top'>
            <div className='map-info-holder'>
              <img alt='' className='map-info-marker-pic'src={event?.events[0]?.host?.image} />
            <div className='map-info-naem'>
              <div className='map-info-marker'>{event?.events[0]?.host?.first_name}</div>
              <div className='map-info-marker'>{event?.events[0]?.host?.last_name}</div>
            </div>
              <div className='map-info-marker'>{event?.events[0]?.host?.email}</div>



            </div>
          </div>
            <div className='map-info-marker'>
              { event?.events[0]?.host_id !== user.id ? <p className='follower-number'>{  ( follower ) ? <button value={follower[0]?.id} onClick={(e) => unfollow(e) } className='unfollow-me-button'>following</button> : <button onClick={() => follow()} className='follow-me-button'>follow</button> }</p> : null}
            </div>
        </div>
        {promoter_panel}

        <div className=''>
          <div className='map-info-map'>

          <div>
            <Map props={{latitude: Number(event?.events[0]?.venue?.latitude), longitude:(event?.events[0]?.venue?.longitude), zoom:18}} style={{ height: '50vh', width: '10%' }} />
          </div>


          </div>
        </div>

        <div className='map-map-info-box'>
          <div className='map-info-map-big top'>{event?.events[0]?.name}</div>
          <div className='map-info-map-small'>at</div>
          <div className='map-info-map-big'>{event?.events[0]?.venue?.name}</div>
          <div className='map-info-map-small'>{event?.events[0]?.venue?.address} {event?.events[0]?.venue?.city}, {event?.events[0]?.venue?.state } {event?.events[0]?.venue?.zip_code}</div>
          <div className='map-info-map-icons'>
            <div><img className='icon-set icon-plane'/></div>
            <div><img className='icon-set icon-person'/></div>
            <div><img className='icon-set icon-bike'/></div>
            <div><img className='icon-set icon-car'/></div>
          </div>
        </div>

    </div>
    </>
  )



// this is my api key  in react root .env


// ===========================================follow/unfollow===========================================================================


const follow = async () => {
  await dispatch(actionfollowers.follow(event?.events[0]?.host_id))
  runonce()
}

const unfollow = async (e) => {
  await dispatch(actionfollowers.leave_loser(e.target.value))
  runonce()
}

// ===========================================listen===========================================================================

// document.addEventListener("scroll", e => {
//   document.querySelector('.purchase-tix-bar').classList.add('purchase-tix-bar-stick')
// })


// ===========================================delete===========================================================================


const deletethisevent = async () => {
  const ask = window.confirm("are you sure you want to delete your event?")
  if (ask) {
      await dispatch(delete_event(eventId.eventId))
      history.push('/')
  }
}

const findedit = () => {
  setVenue(event?.events[0]?.venue_id)
  setCategory(event?.events[0]?.category_id)
  setName(event?.events[0]?.name)
  setDescript(event?.events[0]?.description)
  setStart(moment(event?.events[0]?.start_time).add(5, 'hours').format('MMM D YYYY HH:mm:ss'))
  setEnd(moment(event?.events[0]?.end_time).add(5, 'hours').format('MMM D YYYY HH:mm:ss'))
  setCap(event?.events[0]?.capacity)
  setImg(event?.events[0]?.image)
  setCost(event?.events[0]?.cost)
}

const editthisevent =  async (e) => {
    e.preventDefault()

    let data


    if (moment(start_time).format('YYYY-MM-DD HH:mm:ss') < moment(end_time).format('YYYY-MM-DD HH:mm:ss')) {
      handleCancel()
      data = await dispatch(edit_event(
          user.id,
          venue_id,
          category_id,
          name,
          description,
          moment(start_time).format('YYYY-MM-DD HH:mm:ss'),
          moment(end_time).format('YYYY-MM-DD HH:mm:ss'),
          capacity,
          image,
          cost,
          eventId.eventId))
          runonce()
    } else {
      window.alert("Your end date cannot come before your start. Please make the proper selection.")
    }
    return data
}


let edit = null

if (editForm) {
    edit = (
        <>
            <div className='edit-panel-container'>
                <div className="edit-container">
                    <form className='edit-form' onSubmit={(e) =>{editthisevent(e)}}>
                        <div>
                            <label className='edit-labels'> Venue selection
                                <select
                                    type="number"
                                    value={venue_id}
                                    onChange={(e) => setVenue(e.target.value)}
                                    required={true}
                                    className='edit-input longer'
                                >
                                    <option value='' key='00'>select</option>
                                    {venue?.map(ven => (
                                        <option key={ven.id} value={ven.id}>{ven.name}, address: {ven.address} {ven.city}, {ven.state}</option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Category
                                <select
                                        type="number"
                                        value={category_id}
                                        onChange={(e) => setCategory(e.target.value)}
                                        required={true}
                                        className='edit-input longer'
                                    >
                                        <option value='' key='00'>select</option>
                                        {category?.map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.type}</option>
                                        ))}
                                </select>
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Name of event
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required={true}
                                    className='edit-input'
                                    maxLength={255}
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Description to event
                                <textarea
                                    // type="text"
                                    value={description}
                                    onChange={(e) => (setDescript(e.target.value))}
                                    required={true}
                                    className='edit-textarea'
                                    maxLength={5000}
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Start of event
                                <input
                                    type="datetime-local"
                                    value={moment(start_time).format('YYYY-MM-DDTHH:mm')}
                                    onChange={(e) => (setStart(moment(e.target.value).format('MMM D YYYY HH:mm:ss')))}
                                    required={true}
                                    className='edit-input'
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> End of event
                                <input
                                    type='datetime-local'
                                    value={moment(end_time).format('YYYY-MM-DDTHH:mm')}
                                    onChange={(e) => (setEnd(moment(e.target.value).format('MMM D YYYY HH:mm:ss')))}
                                    required={true}
                                    className='edit-input'
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Capacity limit
                                <input
                                    type='number'
                                    value={capacity}
                                    onChange={(e) => setCap(e.target.value)}
                                    required={true}
                                    className='edit-input'
                                    max={2000000000}
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> Main event image
                                <input
                                    type='text'
                                    value={image}
                                    onChange={(e) => setImg(e.target.value)}
                                    className='edit-input'
                                />
                            </label>
                        </div>
                        <div>
                            <label className='edit-labels'> ticket costs
                                <input
                                    type='number'
                                    value={cost}
                                    onChange={(e) => setCost(e.target.value)}
                                    required={true}
                                    className='edit-input'
                                    max={2000000000}
                                />
                            </label>
                        </div>
                        <button className='edit-form-buttons' type='submit'>Update</button>
                        <button className='edit-form-buttons' onClick={() => {handleCancel()}} type='button'>Cancel</button>
                    </form>
                </div>
            </div>
        </>
    )
}

const handleCancel = () => {
    toggleEdit(!editForm)
}

/* --------------------------opening message------------ ------------------------------------------- */

// ===========================================return===========================================================================
  return (
        <>
            {window.addEventListener("LOAD", async (e) => {
              dispatch(actionfollowers.get_follower_with_promo(Number(event?.events[0]?.host_id)))
            })}
          <div className='event-page'>
            <div className='event-page-topcard'>
              <div className='event-page-img-container'>
                <img alt='' className='event-page-img'src={event?.events[0]?.image}/>
              </div>
              <div className="event-page-card">
                <div>
                  <p>{moment(event?.events[0]?.start_time).format('MMM do')}</p>
                  {(event?.events[0]?.name.toString().length > 50) ? <p className='events-page-card-naem-long'>{event?.events[0]?.name}</p> : <p className='events-page-card-naem-short'>{event?.events[0]?.name}</p> }
                  {(event?.events[0]?.name.toString().length > 100) ? <p className='events-page-card-naem-very-long'>{event?.events[0]?.name}</p> : null /*<p className='events-page-card-naem-short'>{event?.events[0]?.name}</p> */ }
                  <p className='event-card-basic-info event-name-info'>By: {event?.events[0]?.host?.first_name} {event?.events[0]?.host?.last_name} </p>
                  <p className='event-card-basic-info'>Contact: {event?.events[0]?.host?.email} </p>
                  { event?.events[0]?.host_id !== user.id ?  <p className='follower-number'>{event?.events[0]?.followers?.length} followers { follower ? <button value={follower[0]?.id} onClick={(e) => unfollow(e) } className='unfollow-me-button'>following</button> : <button onClick={() => follow()} className='follow-me-button'>follow</button> }</p>: null}
                  { event?.events[0]?.host_id !== user.id ?  <p className='ticket-message'>{ticket ? <p className='ticket-message-inner'> You are going! </p> : <p className='ticket-message-inner'> You are not going! </p>  }</p> : <> <p className='ticket-message-inner'> This is your event! </p> <button className='editable-event' onClick={() => (toggleEdit(!editForm), findedit())} type='button'>edit this event</button> <br/> <button className='deletable-event' onClick={() => deletethisevent()} type='button'>delete this event</button> </> }
                  { event?.events[0]?.host_id !== user.id ? event?.events[0]?.cost ? <p className='ticket-prices-start'>Tickets start at: ${event?.events[0]?.cost}</p> : <p className='ticket-prices-start'>Free</p> : null }
                </div>
              </div>
            </div>
            <div className="purchase-tix-bar">
                { event?.events[0]?.host_id !== user.id ?   <button type='button' onClick={() => (setPanel(!panel))} className='ticket-button'>Tickets</button> : null }
            </div>
            <div className='event-page-bot-grid'>
              <div className='events-main-cont-container'>
                <div className='events-main-cont'>
                  <div class='events-description-text'>
                    <p>
                      {moment(event?.events[0]?.start_time).format('MMM do')}
                      - SINGLE DAY PASS - One (1) general admission RSVP to attend&nbsp;
                    {event?.events[0]?.name} in {event?.events[0]?.venue?.city},&nbsp;
                    {event?.events[0]?.venue?.state}
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
                    <p className='startend-times'>{moment(event?.events[0]?.start_time).add(5, 'hours').format('ddd[,] MMMM Do [,] YYYY [at] h:mm A')}</p>
                    <p>Ends:</p>
                    <p className='startend-times'>{moment(event?.events[0]?.end_time).add(5, 'hours').format('dddd[,] MMMM Do[,] YYYY [at] h:mm A')}</p>

                    <p className="events-address-label">Location:</p>
                    <div className='events-page-location'>
                      <p className="events-address-para">{event?.events[0]?.venue?.name}</p>
                      <p className="events-address-para">{event?.events[0]?.venue?.address}</p>
                      <p className="events-address-para">{event?.events[0]?.venue?.city}, {event?.events[0]?.venue?.state}</p>
                      <p className="events-address-para">{event?.events[0]?.venue?.zip_code}</p>
                      <p className="events-address-para">Lat: {event?.events[0]?.venue?.latitude} Lon: {event?.events[0]?.venue?.longitude} </p>
                      <button className='view-map-button' onClick={() => document.querySelector('.the-real-map').scrollIntoView({behavior: 'smooth'})}>view map</button>
                    </div>
                    <p className="events-address-label">Refund Policy: </p>
                    <p  className="events-address-para">Contact the organizer to request a refund. Adventure Time's fee is nonrefundable. </p>
                </div>
              </div>
            </div>
          </div>
          {/* {// ===========================================insert===========================================================================} */}
            {map_panel}
            {/* <SideScroll /> */}
            {ticket_panel}
            {edit}

          <FooterBar/>

        </>
  );
};

export default EachEvent;
