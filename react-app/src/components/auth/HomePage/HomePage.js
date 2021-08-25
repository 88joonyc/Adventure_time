import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link, useHistory, useParams } from 'react-router-dom';

import * as eventActions from '../../../store/event'
import SplashPage from './SplashPage'

const HomePage = () => {
const dispatch = useDispatch()
// const { userId } = useParams()
const history = useHistory

const sessionUser = useSelector(state => state.session)
const events = useSelector(state => state.events_reducer?.events?.events)

let content = null

useEffect(() => {
    dispatch(eventActions.all_events())
}, [])



if (sessionUser.user) {
    content = (
        <>
        {events?.map(event => (
            <>
            <div>
                <h3>{event.host_id}</h3>
                <p>{event.venue_id}</p>
                <p>{event.category_id}</p>
                <p>{event.name}</p>
                <p>{event.start_time}</p>
                <p>{event.end_time}</p>
                <p>{event.capcaity}</p>
                <img src={event.image}/>
                <p>{event.cost}</p>
                <button>delete</button>
            </div>
            </>
        ))}

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
