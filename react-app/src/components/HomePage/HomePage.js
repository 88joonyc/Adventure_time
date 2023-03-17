import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import LazyLoad from 'react-lazyload'
import moment from 'moment'

import SplashPage from './SplashPage'
import * as eventActions from '../../store/event'
import { all_categories } from '../../store/category';
import { all_venues } from '../../store/venue';
import { authenticate } from '../../store/session';
import EditForm from '../EditForm/EditForm';
import PopularBar from '../PopularBar/PopularBar';
import Search from '../Search/Search';
import OpeningMessage from '../OpeningMessage/OpeningMessage';
import Heart from '../Heart/Heart';
import CardInfo from '../CardInfo/CardInfo';


const HomePage = () => {
const dispatch = useDispatch()

const sessionUser = useSelector(state => state.session.user)
const events = useSelector(state => state.events_reducer?.events?.events)
const category = useSelector(state => (state?.categories_reducer?.categories));
const venue = useSelector(state => state?.venues_reducer?.venues);

const [editForm, toggleEdit] = useState(false)
const [eventId, setId] = useState([]);
const [venueId, setVenue] = useState('');
const [categoryId, setCategory] = useState('');
const [name, setName] = useState('');
const [description, setDescript] = useState('');
const [startTime, setStart] = useState('');
const [endTime, setEnd] = useState('');
const [capacity, setCap] = useState('');
const [image, setImg] = useState('');
const [cost, setCost] = useState('');
const [search, setSearch] = useState('');

const editthisevent =  async (e) => {
    e.preventDefault()
    let data
    if (moment(startTime).format('YYYY-MM-DD HH:mm:ss') < moment(endTime).format('YYYY-MM-DD HH:mm:ss')) {
        data = await dispatch(eventActions.edit_event(
            sessionUser.id,
            venueId,
            categoryId,
            name,
            description,
            moment(startTime).format('YYYY-MM-DD HH:mm:ss'),
            moment(endTime).format('YYYY-MM-DD HH:mm:ss'),
            capacity,
            image,
            cost,
            eventId))
        await dispatch(eventActions.all_events())
        toggleEdit(!editForm)
        return data
    } else {
        window.alert('Your end dates cannot comne before your start dates. Please check the fields and try again.')
    }
}

useEffect( () =>  {

    if (sessionUser) {
        dispatch(eventActions.all_events())
    } else {
        dispatch(eventActions.unregistered_events())
    }
    // dispatch(all_categories())
    // dispatch(all_venues())
    // dispatch(authenticate())
}, [])

/* --------------------------crud delete ----------------------------------------------------- */


const handleDelete = async (e) => {
    const ask = window.confirm("are you sure")
    const eventId = e?.target?.value
    if (ask){
        await dispatch(eventActions.delete_event(eventId))
        dispatch(eventActions.all_events())
    }
}

/* -------------------------- cards------------ ------------------------------------------- */


const homeMain = (
        <>
            <div className='box' >
                <div className='card-container'>
                    {events?.map(event => (
                        <>
                            <div className="event-cards">
                                <Link className='card-per' to={`/event/${event?.id}`}>
                                    <LazyLoad
                                        key={`eventcard-photo-${event.id}`}
                                        offset={[-200, 200]}
                                        placeholder={'...loading'}
                                    >
                                        <img alt={`${event?.image}-for-events`} src={event?.image} className="lazy-img"/>
                                    </LazyLoad>
                                    {sessionUser ? (<Heart event={event}/>) : null}
                                        <CardInfo event={event}/>
                                        {/* {(event?.host_id === sessionUser?.id ) ? (
                                            <>
                                                <button
                                                type='button'
                                                className='home-card-delete-button'
                                                onClick={() => (
                                                    toggleEdit(!editForm),
                                                    setVenue(event.venueId),
                                                    setCategory(event.categoryId),
                                                    setName(event.name),
                                                    setStart(moment(event.startTime).add(5, 'hours')),
                                                    setEnd(moment(event.endTime).add(5, 'hours')),
                                                    setCap(event.capacity),
                                                    setImg(event.image),
                                                    setCost(event.cost),
                                                    setDescript(event.description),
                                                    setId(event.id))}>edit</button>
                                                <button
                                                type='button'
                                                className='home-card-edit-button'
                                                onClick={(e) => (
                                                    handleDelete(e))}
                                                    value={event?.id}>X</button>
                                            </>
                                        ) : null} */}
                                    </Link>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </>
    )

/* --------------------------return--------------------------------------------------------------- */

    return (
        <>
        {sessionUser ? <OpeningMessage /> : <SplashPage/>}
        <Search events={events} search={search} setSearch={setSearch}/>
        <PopularBar setSearch={setSearch} sessionUser={sessionUser}/>
        {homeMain}
        {editForm ? <EditForm {...{editthisevent,venueId, setVenue, venue, categoryId, setCategory, category, name, setName, description, setDescript, startTime, setStart, setEnd, capacity, setCap, image, setImg, cost, setCost, editForm, toggleEdit}}/> : null}
        </>
    )
}


/* --------------------------end--------------------------------------------------------------- */
export default HomePage
