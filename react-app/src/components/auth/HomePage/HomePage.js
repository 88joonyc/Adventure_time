import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import moment from 'moment'

import SplashPage from './SplashPage'
import * as eventActions from '../../../store/event'
import { authenticate } from '../../../store/session'
import hearts_reducer, * as heartActions from '../../../store/heart'
import { all_categories } from '../../../store/category';
import { all_venues } from '../../../store/venue';


const HomePage = () => {
const dispatch = useDispatch()
const history = useHistory()

const sessionUser = useSelector(state => state.session.user)
const events = useSelector(state => state.events_reducer?.events?.events)
const category = useSelector(state => (state?.categories_reducer?.categories));
const venue = useSelector(state => state?.venues_reducer?.venues);

const [errors, setErrors] = useState([]);
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

const updateVenue = (e) => {
    e.preventDefault()
    setVenue(e.target.value)
}


const handleSubmit =  async (e) => {
    e.preventDefault()
    let data = await dispatch(eventActions.edit_event(sessionUser.id, venue_id, category_id, name, description, moment(start_time).format('YYYY-MM-DD hh:mm:ss'), moment(end_time).format('YYYY-MM-DD hh:mm:ss'), capacity, image, cost, eventId))
    await dispatch(eventActions.all_events())
    return data
}

let content = null

useEffect(() => {
    dispatch(eventActions.all_events())
    dispatch(all_categories())
    dispatch(all_venues())
}, [dispatch])

const handleDelete = async (e) => {
    const ask = window.confirm("are you sure")
    const eventId = e.target.value
    if (ask){
        await dispatch(eventActions.delete_event(eventId))
        await dispatch(eventActions.all_events())
    }
}

const handleCancel = () => {
    toggleEdit(!editForm)
}
/* --------------------------edit form ----------------------------------------------------- */

let edit = null

if (editForm) {
    edit = (
        <>
            <div className='edit-panel-container'>
                <div className="edit-container">
                <form className='edit-form' onSubmit={(e) =>{handleSubmit(e)}}>
                    <div>
                        <label className='edit-labels'> Venue selection
                            {/* <input
                                type="number"
                                value={venue_id}
                                onChange={(e) => setVenue(e.target.value)}
                                required="true"
                                className='edit-input'
                            /> */}
                            <select
                                type="number"
                                value={venue_id}
                                onChange={(e) => setVenue(e.target.value)}
                                required="true"
                                className='edit-input'
                            >
                                <option>select</option>
                                {venue?.map(ven => (
                                    <option value={ven.id}>{ven.name}, address: {ven.address} {ven.city}, {ven.state}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label className='edit-labels'> Category
                            {/* <input
                                type="number"
                                value={category_id}
                                onChange={(e) => setCategory(e.target.value)}
                                required="true"
                                className='edit-input'
                            /> */}
                            <select
                                    type="number"
                                    value={category_id}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required="true"
                                    className='edit-input'
                                >
                                    <option>select</option>
                                    {category?.map(cat => (
                                        <option value={cat.id}>{cat.type}</option>
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
                                required="true"
                                className='edit-input'
                            />
                        </label>
                    </div>
                    <div>
                        <label className='edit-labels'> Description to event
                            <textarea
                                type="text"
                                value={description}
                                onChange={(e) => setName(e.target.value)}
                                required="true"
                                className='edit-textarea'
                            />
                        </label>
                    </div>
                    <div>
                        <label className='edit-labels'> Start of event
                            <input
                                type="datetime-local"
                                value={moment(start_time).format('YYYY-MM-DDTHH:mm')}
                                onChange={(e) => setStart(e.target.value)}
                                required="true"
                                className='edit-input'
                            />
                        </label>
                    </div>
                    <div>
                        <label className='edit-labels'> End of event
                            <input
                                type='datetime-local'
                                value={moment(end_time).format('YYYY-MM-DDTHH:mm')}
                                onChange={(e) => setEnd(e.target.value)}
                                required="true"
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
                                required="true"
                                className='edit-input'
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
                                required="true"
                                className='edit-input'
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

/* --------------------------opening message------------ ------------------------------------------- */


const opening = (
    <>
    <div className='spalsh-image-2'>
        <p className="top-sent top-home-sent">Get down</p>
        <p className="bottom-sent top-home-sent">for the HOOK!</p>
        <button onClick={console.log('jello')} className="event-button">Find your next event</button>
    </div>
    <div className='opening-message'>
        <h3>
            Re-open confidently with Adventure Time's COVID-19 Safety Playbook
        </h3>
        <p>
            We partnered with risk management and health experts to empower event creators to thoughtfully consider potential safety and security risks at your event.
        </p>
    </div>
    </>
)

/* -------------------------- hearts------------ ------------------------------------------- */


const heartyou = async (e) => {

    await dispatch(heartActions.heart())
    dispatch(authenticate())


}
const hateyou = async (value) => {
    // e.preventDefault()
    console.log('ds------------ ---------------------------------', value)
    await dispatch(heartActions.hate(Number()))
    dispatch(authenticate())
}


/* -------------------------- cards------------ ------------------------------------------- */

const need = (
        <>
        <h1>Popular in </h1>
            <div className='box' >
                <div className='card-container'>
                    {events?.map(event => (
                        <>
                                <div className="event-cards">
                                    {/* <h4>{event.host_id}</h4> */}
                                    <img src={event.image}/>
                                    { !sessionUser?.hearts_list?.includes(event.id) ? <button value={event?.id} type='button' onClick={(e) => {heartyou(event?.id)}} className='heart-button'>{<img className="red-heart" />}</button> : <button value={event?.id} onClick={(e) => {hateyou(event?.id)}} type='button' className='heart-button'>{<img className="black-heart" />}</button>}
                                    <Link className='card-per' to={`/event/${event.id}`}>
                                    <div className='card-info-container'>
                                        <h2 className='card-print card-name-home'>{event?.name}</h2>
                                        {/* <p className='card-print'>{event.category.type}</p> */}
                                        <p hidden="true" className='card-print'>{event?.description}</p>
                                        <p className='card-print card-date'>{moment(event?.start_time).format('ddd, MMM D, h:mm A')}</p>
                                        {/* <p className='card-print'>{moment(event.end_time).format('ddd, MMM D, h:mm A')}</p> */}
                                        <p className='card-print card-venue-home'>{event?.venue.name} • {event.venue.city}</p>
                                        <p className='card-print card-cost-home'>starts at ${event?.cost}</p>
                                        <p className='card-print card-user-home'>{event.user?.email}</p>
                                        <p className='card-print card-cap-home'>Limited to: {event?.capacity} seats!</p>
                                    </div>
                                    </Link>
                                        {(event?.host_id === sessionUser?.id ) ? (
                                            <>
                                                <button type='button' onClick={() => (toggleEdit(!editForm), setVenue(event.venue_id), setCategory(event.category_id), setName(event.name), setStart(event.start_time), setEnd(event.end_time), setCap(event.capacity), setImg(event.image), setCost(event.cost), setDescript(event.description), setId(event.id))}>edit</button>
                                                <button type='button' onClick={(e) => (handleDelete(e))} value={event.id}>delete</button>
                                            </>
                                        ) : null}
                                </div>
                        </>
                    ))}
                </div>
            </div>
        {edit}
        </>)

/* --------------------------splash--------------------------------------------------------------- */


if (!sessionUser) {
    content = (
        <>
        <SplashPage/>
        </>
    )
}

/* --------------------------return--------------------------------------------------------------- */

    return (
        <>
        {sessionUser? opening : null}
        {content}
        {need}
        </>
    )
}

/* --------------------------end--------------------------------------------------------------- */
export default HomePage
