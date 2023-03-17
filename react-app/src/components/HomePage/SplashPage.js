import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as eventActions from '../../store/event'
import './SplashPage.css'

const SplashPage = () => {

    const dispatch = useDispatch()

useEffect( () =>  {
    // dispatch(eventActions.unregistered_events())
}, [])

    return (
    <>
    <div className='spalsh-image'>
        <div>
            <p className="opening-sent top-sent">It's TIME</p>
            <p className="opening-sent bottom-sent">to get Wild!</p>
            <button  onClick={() => window.scrollTo(0,580)} className="event-button">Find your next event</button>
        </div>
    </div>
    <div className='covid-message'>
        <h3 className='covid-header-title'>
            Re-open confidently with Adventure Time's COVID-19 Safety Playbook
        </h3>
        <p className='covid-under-msg'>
            We partnered with risk management and health experts to empower event creators to thoughtfully consider potential safety and security risks at your event.
        </p>
    </div>
    </>
    )
}


export default SplashPage
