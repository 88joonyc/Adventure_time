import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useHistory, useParams } from 'react-router-dom';

import moment from 'moment'

import * as eventActions from '../../../store/event'
import SplashPage from './SplashPage'



const HomePage = () => {
const dispatch = useDispatch()
const history = useHistory()

const sessionUser = useSelector(state => state.session.user)
const events = useSelector(state => state.events_reducer?.events?.events)

// const [ eventId, setEventId ] = useState('')
const [ editForm, toggleEdit ] = useState(false)
const [errors, setErrors] = useState([]);
const [eventId, setId] = useState([]);
const [venue_id, setVenue] = useState('');
const [category_id, setCategory] = useState('');
const [name, setName] = useState('');
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

    let data = await dispatch(eventActions.edit_event(sessionUser.id, venue_id, category_id, name, moment(start_time).format('YYYY-MM-DD hh:mm:ss'), moment(end_time).format('YYYY-MM-DD hh:mm:ss'), capacity, image, cost, eventId))
    return data
}

let content = null

useEffect(() => {
    dispatch(eventActions.all_events())
}, [dispatch])

const test = () => {
    console.log('==========================================', moment(start_time).format('MMM DD HH:mm:ss'))
}

const handleDelete = async (e) => {
    const ask = window.confirm("are you sure")
    const eventId = e.target.value
    if (ask){
        await dispatch(eventActions.delete_event(eventId))
        await dispatch(eventActions.all_events())
    }
}

const thisdate = moment(start_time).format('YYYY-MM-DDTHH:MMZ')

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
                    <button onClick={() => test()} type='button'>test</button>
                </form>
            </div>
        </div>
        </>
    )
}


if (sessionUser) {
    content = (
        <>
        <div className='box' >
            <div className='card-container'>
                {events?.map(event => (
                    <>
                    <div className="event-cards">
                        <h4>{event.host_id}</h4>
                        <p className='card-print'>{event.venue_id}</p>
                        <p className='card-print'>{event.category_id}</p>
                        <p className='card-print'>{event.name}</p>
                        <p className='card-print'>{event.start_time}</p>
                        <p className='card-print'>{event.end_time}</p>
                        <p className='card-print'>{event.capacity}</p>
                        <img src={event.image}/>
                        <p className='card-print'>{event.cost}</p>
                        {(event?.host_id === sessionUser?.id ) ? (
                            <>
                                <button onClick={() => (toggleEdit(!editForm), setVenue(event.venue_id), setCategory(event.category_id), setName(event.name), setStart(event.start_time), setEnd(event.end_time), setCap(event.capacity), setImg(event.image), setCost(event.cost), setId(event.id))}>edit</button>
                                <button onClick={(e) => (handleDelete(e))} value={event.id}>delete</button>
                            </>
                         ) : null}
                    </div>
                    </>
                ))}
            </div>
        </div>
        {edit}
    </>)
} else {
    content = (
        <>
            <SplashPage/>
        </>
    )
}

    return (content)
}

export default HomePage
