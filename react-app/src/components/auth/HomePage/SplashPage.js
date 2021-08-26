import React, { useState } from 'react';
import './SplashPage.css'

const SplashPage = () => {
    return (
    <>
    <div className='spalsh-image'>
        <p className="opening-sent top-sent">It's TIME</p>
        <p className="opening-sent bottom-sent">to get Wild!</p>
        <button className="event-button">Find your next event</button>
    </div>
    <div className='covid-message'>
        <h3>
            Re-open confidently with Adventure Time's COVID-19 Safety Playbook
        </h3>
        <p>
            We partnered with risk management and health experts to empower event creators to thoughtfully consider potential safety and security risks at your event.
        </p>
    </div>
    </>
    )
}


export default SplashPage
