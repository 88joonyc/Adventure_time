import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useHistory, useParams } from 'react-router-dom';

import * as eventActions from '../../../store/event'
import SplashPage from './SplashPage'

const HomePage = () => {
const dispatch = useDispatch()
// const { userId } = useParams()
const history = useHistory

const sessionUser = useSelector(state => state.session.user)
const events = useSelector(state => state.events_reducer?.events?.events)

let content = null

console.log(sessionUser)

useEffect(() => {
    dispatch(eventActions.all_events())
}, [])

const userbutt = (
    <>
        <button>edit</button>
        <button onChange>delete</button>
    </>
)



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
                        {(event?.host_id === sessionUser?.id )? userbutt : null}
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
