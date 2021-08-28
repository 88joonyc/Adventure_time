import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';

import moment from 'moment'

import * as eventActions from '../../store/event'




const EditPanel = () => {
const dispatch = useDispatch()
const history = useHistory()

const sessionUser = useSelector(state => state.session.user)
const events = useSelector(state => state.events_reducer?.events?.events)

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

const handleSubmit =  async (e) => {
    e.preventDefault()
    let data = await dispatch(eventActions.edit_event(sessionUser.id, venue_id, category_id, name, description, moment(start_time).format('YYYY-MM-DD hh:mm:ss'), moment(end_time).format('YYYY-MM-DD hh:mm:ss'), capacity, image, cost, eventId))
    await dispatch(eventActions.all_events())
    return data
}

let content = null

useEffect(() => {
    dispatch(eventActions.all_events())
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

let edit = null

if (editForm) {
    edit = (
        <>
            <div className='container'>
                <div className="edit-container">
                <form onSubmit={(e) =>{handleSubmit(e)}}>
                    <div>
                        <label> venue_id
                            <input
                                type="number"
                                value={venue_id}
                                onChange={(e) => setVenue(e.target.value)}
                                required="true"
                            />
                        </label>
                    </div>
                    <div>
                        <label> category_id
                            <input
                                type="number"
                                value={category_id}
                                onChange={(e) => setCategory(e.target.value)}
                                required="true"
                            />
                        </label>
                    </div>
                    <div>
                        <label> name
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required="true"
                            />
                        </label>
                    </div>
                    <div>
                        <label> description
                            <textarea
                                type="text"
                                value={description}
                                onChange={(e) => setName(e.target.value)}
                                required="true"
                            />
                        </label>
                    </div>
                    <div>
                        <label> start_day
                            <input
                                type="datetime-local"
                                value={moment(start_time).format('YYYY-MM-DDTHH:mm')}
                                onChange={(e) => setStart(e.target.value)}
                                required="true"
                            />
                        </label>
                    </div>
                    <div>
                        <label> end_day
                            <input
                                type='datetime-local'
                                value={moment(end_time).format('YYYY-MM-DDTHH:mm')}
                                onChange={(e) => setEnd(e.target.value)}
                                required="true"
                            />
                        </label>
                    </div>
                    <div>
                        <label> capacity
                            <input
                                type='number'
                                value={capacity}
                                onChange={(e) => setCap(e.target.value)}
                                required="true"
                            />
                        </label>
                    </div>
                    <div>
                        <label> Image
                            <input
                                type='text'
                                value={image}
                                onChange={(e) => setImg(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label> cost
                            <input
                                type='number'
                                value={cost}
                                onChange={(e) => setCost(e.target.value)}
                                required="true"
                            />
                        </label>
                    </div>
                    <button type='submit'>edit</button>
                    <button onClick={() => {handleCancel()}} type='button'>cancel</button>
                </form>
            </div>
        </div>
        </>
    )
}


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


    return (
        <>

        {content}
        {need}
        </>
    )
}

export default EditPanel
