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
console.log('this is evetns',events[0].id)

useEffect(() => {
    dispatch(eventActions.all_events())
}, [])



if (sessionUser.user) {
    content = (<>
        {/* {console.log(events[0])} */}
        {events?.map(event => {
            <>
            <h1>{event.id}</h1>
            <h1>h1</h1>
            </>

        })}
        {/* <h1>h1</h1> */}
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
