import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useHistory, useParams } from 'react-router-dom';

import * as eventActions from '../../../store/event'
import SplashPage from './SplashPage'

const HomePage = () => {
const dispatch = useDispatch()
const history = useHistory

const sessionUser = useSelector(state => state.session.user)
const events = useSelector(state => state.events_reducer?.events?.events)

// const [ eventId, setEventId ] = useState('')

let content = null

useEffect(() => {
    dispatch(eventActions.all_events())
}, [eventActions])

const handleDelete = (e) => {
    const ask = window.confirm("are you sure")
    const eventId = e.target.value
    if (ask){
        dispatch(eventActions.delete_event(eventId))
    }
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
                        <p className='card-print'>{event.capcaity}</p>
                        <img src={event.image}/>
                        <p className='card-print'>{event.cost}</p>
                        {(event?.host_id === sessionUser?.id ) ? (
                            <>
                                <button>edit</button>
                                <button onClick={(e) => (handleDelete(e))} value={event.id}>delete</button>
                            </>
                         ) : null}
                    </div>
                    </>
                ))}
            </div>
        </div>
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
