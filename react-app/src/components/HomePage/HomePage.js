import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment'

import SplashPage from './SplashPage'
import * as eventActions from '../../store/event'
import * as heartActions from '../../store/heart'
import { all_categories } from '../../store/category';
import { all_venues } from '../../store/venue';
import { authenticate } from '../../store/session';
import EditForm from '../EditForm/EditForm';
import PopularBar from '../PopularBar/PopularBar';
import Search from '../Search/Search';
import OpeningMessage from '../OpeningMessage/OpeningMessage';


const HomePage = () => {
const dispatch = useDispatch()

const sessionUser = useSelector(state => state.session.user)
const events = useSelector(state => state.events_reducer?.events?.events)
const category = useSelector(state => (state?.categories_reducer?.categories));
const venue = useSelector(state => state?.venues_reducer?.venues);

const [editForm, toggleEdit] = useState(false)
const [eventId, setId] = useState([]);
const [venue_id, setVenue] = useState('');
const [category_id, setCategory] = useState('');
const [name, setName] = useState('');
const [description, setDescript] = useState('');
const [start_time, setStart] = useState('');
const [end_time, setEnd] = useState('');
const [capacity, setCap] = useState('');
const [image, setImg] = useState('');
const [cost, setCost] = useState('');
const [search, setSearch] = useState('');

const editthisevent =  async (e) => {
    e.preventDefault()
    let data
    if (moment(start_time).format('YYYY-MM-DD HH:mm:ss') < moment(end_time).format('YYYY-MM-DD HH:mm:ss')) {
        data = await dispatch(eventActions.edit_event(
            sessionUser.id,
            venue_id,
            category_id,
            name,
            description,
            moment(start_time).format('YYYY-MM-DD HH:mm:ss'),
            moment(end_time).format('YYYY-MM-DD HH:mm:ss'),
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
    dispatch(eventActions.all_events())
    dispatch(all_categories())
    dispatch(all_venues())
    dispatch(authenticate())
}, [dispatch])

/* --------------------------crud delete ----------------------------------------------------- */


const handleDelete = async (e) => {
    const ask = window.confirm("are you sure")
    const eventId = e?.target?.value
    if (ask){
        await dispatch(eventActions.delete_event(eventId))
        dispatch(eventActions.all_events())
    }
}

/* -------------------------- hearts------------ ------------------------------------------- */


const heartyou = async (e) => {
    // e.preventDefault()
    await dispatch(heartActions.heart(Number(e)))
    dispatch(eventActions.all_events())
}
const hateyou = async (e) => {
    // e.preventDefault()
    await dispatch(heartActions.hate(Number(e)))
    dispatch(eventActions.all_events())
}

/* -------------------------- cards------------ ------------------------------------------- */


const need = (
        <>
            <div className='box' >
                <div className='card-container'>
                    {events?.map(event => (
                        <>
                            <div className="event-cards">
                                {/* <h4>{event.host_id}</h4> */}
                                <img alt='' src={event?.image}/>
                                { sessionUser ? (<>

                                { !event?.heart?.length ?
                                <button
                                id={event?.id}
                                type='button'
                                onClick={(e) => {heartyou(event?.id)}}
                                className='heart-button'>{<img alt='' className="red-heart" />}
                                </button>
                                :
                                <button
                                id={event?.heart?.id}
                                onClick={(e) => {hateyou(event?.heart[0]?.id)}}
                                type='button'
                                className='heart-button'>{<img alt='' className="black-heart" />}
                                </button>}

                                </>) : null }
                                <Link className='card-per' to={`/event/${event?.id}`}>
                                <div className='card-info-container'>
                                    <div className='event-name-conatianer'>
                                        { event?.name?.length < 50 ? <h2 className='card-print card-name-home-short'>{event?.name}</h2> : <h2 className='card-print card-name-home-long'>{event?.name}</h2> }
                                    </div>
                                    {/* <p className='card-print'>{event.category.type}</p> */}
                                    <p hidden={true} className='card-print'>{event?.description}</p>
                                    <p className='card-print card-date'>{moment((event?.start_time)).add(5, 'hours').format('ddd, MMM D, h:mm A')}</p>
                                    {/* <p className='card-print'>{moment(event.end_time).format('ddd, MMM D, h:mm A')}</p> */}
                                    <p className='card-print card-venue-home'>{event?.venue.name} • {event.venue.city}</p>
                                    <p className='card-print card-cost-home'>Starts at ${event?.cost}</p>
                                    <p className='card-print card-user-home'>{event.user?.email}</p>
                                    <p className='card-print card-cap-home'>Limited to: {event?.capacity} seats!</p>
                                    <p className='card-print card-cap-followers'> {<img alt='' className='home-card-followers-img'/>} {event?.followers?.length} followers </p>
                                </div>
                                </Link>
                                    {(event?.host_id === sessionUser?.id ) ? (
                                        <>
                                            <button
                                            type='button'
                                            className='home-card-delete-button'
                                            onClick={() => (
                                                toggleEdit(!editForm),
                                                setVenue(event.venue_id),
                                                setCategory(event.category_id),
                                                setName(event.name),
                                                setStart(moment(event.start_time).add(5, 'hours')),
                                                setEnd(moment(event.end_time).add(5, 'hours')),
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
                                    ) : null}
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
        {need}
        {editForm ? <EditForm editthisevent={editthisevent} venue_id={venue_id} setVenue={setVenue} venue={venue} category_id={category_id} setCategory={setCategory} category={category} name={name} setName={setName} description={description} setDescript={setDescript} start_time={start_time} setStart={setStart} end_time={end_time} setEnd={setEnd} capacity={capacity} setCap={setCap} image={image} setImg={setImg} cost={cost} setCost={setCost} editForm={editForm} toggleEdit={toggleEdit}/> : null}
        </>
    )
}

/* --------------------------end--------------------------------------------------------------- */
export default HomePage
