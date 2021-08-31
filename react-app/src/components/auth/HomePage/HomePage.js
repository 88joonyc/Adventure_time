import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import moment from 'moment'

import SplashPage from './SplashPage'
import * as eventActions from '../../../store/event'
import * as heartActions from '../../../store/heart'
import { all_categories } from '../../../store/category';
import { all_venues } from '../../../store/venue';




const HomePage = () => {
const dispatch = useDispatch()

const sessionUser = useSelector(state => state.session.user)
const events = useSelector(state => state.events_reducer?.events)
const category = useSelector(state => (state?.categories_reducer?.categories));
const venue = useSelector(state => state?.venues_reducer?.venues);

// const [errors, setErrors] = useState([]);
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


const handleEdit =  async (e) => {
    e.preventDefault()
    handleCancel()
    let data = await dispatch(eventActions.edit_event(
        sessionUser.id,
        venue_id,
        category_id,
        name,
        description,
        moment(start_time.split(' GMT').join(' EST')).format('YYYY-MM-DD HH:mm:ss'),
        moment(end_time.split(' GMT').join(' EST')).format('YYYY-MM-DD HH:mm:ss'),
        capacity,
        image,
        cost,
        eventId))
        await dispatch(eventActions.all_events())
    return data
}

let content = null

useEffect( async() =>  {
    dispatch(eventActions.all_events())
    dispatch(all_categories())
    dispatch(all_venues())
    // dispatch(authenticate())
    // window.scroll(0, 0)
}, [dispatch])

const runonce = () => {
    dispatch(eventActions.all_events())
}



/* --------------------------crud delete ----------------------------------------------------- */


const handleDelete = async (e) => {
    const ask = window.confirm("are you sure")
    const eventId = e?.target?.value
    if (ask){
        await dispatch(eventActions.delete_event(eventId))
        dispatch(eventActions.all_events())
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
                <form className='edit-form' onSubmit={(e) =>{handleEdit(e)}}>
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
                                className='edit-input longer'
                            >
                                <option key=''>select</option>
                                {venue?.map(ven => (
                                    <option key={ven.id} value={ven.id}>{ven.name}, address: {ven.address} {ven.city}, {ven.state}</option>
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
                                    className='edit-input longer'
                                >
                                    <option key=''>select</option>
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
                                required="true"
                                className='edit-input'
                            />
                        </label>
                    </div>
                    <div>
                        <label className='edit-labels'> Description to event
                            <textarea
                                // type="text"
                                value={description}
                                onChange={(e) => setDescript(e.target.value)}
                                required="true"
                                className='edit-textarea'
                            />
                        </label>
                    </div>
                    <div>
                        <label className='edit-labels'> Start of event
                            <input
                                type="datetime-local"
                                value={moment(start_time.split(' GMT').join(' EST')).format('YYYY-MM-DDTHH:mm')}
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
                                value={moment(end_time.split(' GMT').join(' EST')).format('YYYY-MM-DDTHH:mm')}
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
            <button onClick={() => window.scrollTo(0,580)} className="event-button">Find your next event</button>
        </div>
        <div className='opening-message'>
            <h3 className='covid-header-title'>
                Re-open confidently with Adventure Time's COVID-19 Safety Playbook
            </h3>
            <p className='covid-under-msg'>
                We partnered with risk management and health experts to empower event creators to thoughtfully consider potential safety and security risks at your event.
            </p>
        </div>
    </>
)

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

const set_located_events = (id) => {
    dispatch(eventActions.located_events(id))
    window.scrollTo(0,580)
}

const set_categorized_events = (id) => {
    dispatch(eventActions.categorized_events(id))
    window.scrollTo(0,580)
}

const set_paid_events = (id) => {
    dispatch(eventActions.cashed_events(id))
    window.scrollTo(0,580)
}

//unregistered.... this is very inefficient
const set_unregistered_located_events = (id) => {
    dispatch(eventActions.unregisted_located_events(id))
    window.scrollTo(0,580)
}

const set_unregisterd_categorized_events = (id) => {
    dispatch(eventActions.unregisted_categorized_events(id))
    window.scrollTo(0,580)
}

const set_unregisterd_paid_events = (id) => {
    dispatch(eventActions.unregisted_cashed_events(id))
    window.scrollTo(0,580)
}


/* -------------------------- popular_bar------------ ------------------------------------------- */


let popular_bar = (
<>

        <div>
            <h1 className='card-popular-in-title'>Popular in  {'>'} {<input
            placeholder='Online events'
            className='venue-search-box' />} </h1>
            <div className='home-card-categories'>
                <div className='cat-button-container'>
                    {sessionUser ? <button onClick={() => dispatch(eventActions.all_events())} className='cat-button'>All</button> : <button onClick={() => dispatch(eventActions.unregistered_events())} className='cat-button'>All</button>}
                </div>
                <div>
                   {sessionUser?  <button onClick={() => set_located_events(2)} className='cat-button'>For you</button> : <button onClick={() => set_unregistered_located_events(2)} className='cat-button'>For you</button> }
                </div>
                <div>
                   {sessionUser?  <button onClick={() => set_located_events(5)} className='cat-button'>Online</button> : <button onClick={() => set_unregistered_located_events(5)} className='cat-button'>Online</button> }
                </div>
                <div>
                    <button className='cat-button'>Today</button>
                </div>
                <div>
                    <button className='cat-button'>This weekend</button>
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_paid_events(0)} className='cat-button'>Free</button> : <button onClick={() => set_unregisterd_paid_events(0)} className='cat-button'>Free</button> }
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_categorized_events(19)} className='cat-button'>Holiday</button> : <button onClick={() => set_unregisterd_categorized_events(19)} className='cat-button'>Holiday</button> }
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_categorized_events(13)} className='cat-button'>Music</button> : <button onClick={() => set_unregisterd_categorized_events(13)} className='cat-button'>Music</button> }
                </div>
                <div>
                    {sessionUser?  <button onClick={() => set_categorized_events(8)} className='cat-button'>Food & Drinks</button> : <button onClick={() => set_unregisterd_categorized_events(8)} className='cat-button'>Food & Drinks</button> }
                </div>
            </div>
        </div>

</>)




/* -------------------------- cards------------ ------------------------------------------- */

// const need = null
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
                                    <Link className='card-per' to={`/event/${event.id}`}>
                                    <div className='card-info-container'>
                                        { event?.name?.length < 50 ? <h2 className='card-print card-name-home-short'>{event?.name}</h2> : <h2 className='card-print card-name-home-long'>{event?.name}</h2> }
                                        {/* <p className='card-print'>{event.category.type}</p> */}
                                        <p hidden="true" className='card-print'>{event?.description}</p>
                                        <p className='card-print card-date'>{moment((event?.start_time).split(' GMT').join(' EST')).format('ddd, MMM D, h:mm A')}</p>
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
                                                    setStart(event.start_time),
                                                    setEnd(event.end_time),
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
        {popular_bar}
        {need}
        </>
    )
}

/* --------------------------end--------------------------------------------------------------- */
export default HomePage
