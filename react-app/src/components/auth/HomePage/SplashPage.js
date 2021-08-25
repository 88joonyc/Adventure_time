import React, { useState } from 'react';
import './SplashPage.css'

const SplashPage = () => {
    return (
    <>
    <div className='spalsh-image'>
        <p className="opening-sent top-sent">It's TIME</p>
        <p className="opening-sent bottom-sent">to get Wild!</p>
        <button>Find your next event</button>
    </div>
    <div>
        <h3>
            Re-open confidently with Eventbrite’s COVID-19 Safety Playbook
        </h3>
        <h4>
            We partnered with risk management and health experts to empower event creators to thoughtfully consider potential safety and security risks at your event. See the playbook.
        </h4>
    </div>
    </>
    )
}


export default SplashPage
