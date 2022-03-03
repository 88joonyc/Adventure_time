import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom';
import FooterBar from '../../NavBar/Footer/Footer';
import { one_event, edit_event, edit_event_capacity } from '../../../store/event';
import * as actiontickets from '../../../store/ticket';
import * as actionfollowers from '../../../store/follower';
import { all_categories } from '../../../store/category';
import { all_venues } from '../../../store/venue';

import MapPanel from '../../MapPanel/MapPanel'
import TicketPanel from '../../TicketPanel/TicketPanel';
import EditForm from '../../EditForm/EditForm';
import BottomEventInfo from '../../BottomEventInfo/BottomEventInfo';
import TopEventInfo from '../../TopEventInfo/TopEventInfo';

import moment from 'moment';

import './Event.css'

const EachEvent = () => {
  const eventId = useParams()
  const [panel, setPanel] = useState(false);
  const [ticketqty, setTicketQty] = useState(0)
  const [tier, setTier] = useState('')
  const [multiplier, setMultiplier] = useState('')

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
  const [startTime, setStart] = useState('');
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

// ===========================================edit===========================================================================

const editthisevent =  async (e) => {
    e.preventDefault()

    let data

    if (moment(startTime).format('YYYY-MM-DD HH:mm:ss') < moment(end_time).format('YYYY-MM-DD HH:mm:ss')) {
      toggleEdit(!editForm)
      data = await dispatch(edit_event(
          user.id,
          venue_id,
          category_id,
          name,
          description,
          moment(startTime).format('YYYY-MM-DD HH:mm:ss'),
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
              <TopEventInfo {...{event, eventId, setVenue, setCategory, setName, setDescript, setStart, setEnd, setCap, setImg, setCost, user, follower, unfollow, follow, ticket, toggleEdit, editForm}}/>
            </div>
            <div className="purchase-tix-bar">
                { event?.events[0]?.host_id !== user.id ? <button type='button' onClick={() => (setPanel(!panel))} className='ticket-button'>Tickets</button> : null }
            </div>
            <BottomEventInfo event={event}/>
          </div>
          {/* {// ===========================================insert===========================================================================} */}
          <MapPanel {...{event, user, follower, unfollow, follow}}/>
          {panel ? < TicketPanel {...{event, ticket, ticketqty, setTicketQty, setTier, setMultiplier, unregisterforthisevent, registerforthisevent, cancelticketq, setPanel, panel, ticketqty, tier, multiplier}}/> : null}
          {editForm ? <EditForm {...{editthisevent, venue_id, setVenue, venue, category_id, setCategory, category, name, setName, description, setDescript, startTime, setStart, end_time, setEnd, capacity, setCap, image, setImg, cost, setCost, editForm, toggleEdit}}/> : null}
          <FooterBar/>
        </>
  );
};

export default EachEvent;
