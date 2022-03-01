import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import FooterBar from '../../NavBar/Footer/Footer';
import { one_event, delete_event, edit_event, edit_event_capacity } from '../../../store/event';
import * as actiontickets from '../../../store/ticket';
import * as actionfollowers from '../../../store/follower';
import { all_categories } from '../../../store/category';
import { all_venues } from '../../../store/venue';

import MapPanel from '../../MapPanel/MapPanel'
import TicketPanel from '../../TicketPanel/TicketPanel';
import EditForm from '../../EditForm/EditForm';

import moment from 'moment';

import './Event.css'
import BottomEventInfo from '../../BottomEventInfo/BottomEventInfo';

const EachEvent = () => {
  const eventId = useParams()
  const [panel, setPanel] = useState(false);
  const [ticketqty, setTicketQty] = useState(0)
  const [tier, setTier] = useState('')
  const [multiplier, setMultiplier] = useState('')

  const history = useHistory()

  const user = useSelector(state => state.session.user)
  const ticket = useSelector(state => (state?.tickets_reducer?.tickets));
  const event = useSelector(state => (state?.events_reducer?.events));
  const follower = useSelector(state => (state?.followers_reducer?.followers));
  const venue = useSelector(state => (state?.venues_reducer?.venues));
  const category = useSelector(state => (state?.categories_reducer?.categories));


  const [editForm, toggleEdit] = useState(false)
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


// ===========================================ticket panel===========================================================================


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


// ===========================================shopping===========================================================================

const cancelticketq = () => {
  setTicketQty('')
}


// ===========================================follow/unfollow===========================================================================


const follow = async () => {
  await dispatch(actionfollowers.follow(event?.events[0]?.host_id))
  runonce()
}

const unfollow = async (e) => {
  await dispatch(actionfollowers.leave_loser(e.target.value))
  runonce()
}

// ===========================================deleteevent===========================================================================


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

// ===========================================editevent===========================================================================

const editthisevent =  async (e) => {
    e.preventDefault()

    let data

    if (moment(start_time).format('YYYY-MM-DD HH:mm:ss') < moment(end_time).format('YYYY-MM-DD HH:mm:ss')) {
      toggleEdit(!editForm)
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

// ===========================================return===========================================================================
  return (
        <>
          {window.addEventListener("LOAD", async (e) => {
            dispatch(actionfollowers.get_follower_with_promo(Number(event?.events[0]?.host_id)))
          })}
          <div className='event-page'>
            <div className='event-page-topcard'>
              <div className='event-page-img-container'>
                <img alt={event?.events[0]?.image} className='event-page-img'src={event?.events[0]?.image}/>
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
                { event?.events[0]?.host_id !== user.id ? <button type='button' onClick={() => (setPanel(!panel))} className='ticket-button'>Tickets</button> : null }
            </div>
            <BottomEventInfo event={event}/>
          </div>
          {/* {// ===========================================insert===========================================================================} */}
            <MapPanel event = {event} user={user} follower={follower} unfollow={unfollow} follow={follow}/>
            {/* <SideScroll /> */}
            {panel ? < TicketPanel event={event} ticket={ticket} ticketqty={ticketqty} setTicketQty={setTicketQty} setTier={setTier} setMultiplier={setMultiplier} unregisterforthisevent={unregisterforthisevent} registerforthisevent={registerforthisevent} cancelticketq={cancelticketq} setPanel={setPanel} panel={panel} ticketqty={ticketqty} tier={tier} event={event} multiplier={multiplier}/> : null}
            {editForm ? <EditForm editthisevent={editthisevent} venue_id={venue_id} setVenue={setVenue} venue={venue} category_id={category_id} setCategory={setCategory} category={category} name={name} setName={setName} description={description} setDescript={setDescript} start_time={start_time} setStart={setStart} end_time={end_time} setEnd={setEnd} capacity={capacity} setCap={setCap} image={image} setImg={setImg} cost={cost} setCost={setCost} editForm={editForm} toggleEdit={toggleEdit}/> : null}

          <FooterBar/>

        </>
  );
};

export default EachEvent;
