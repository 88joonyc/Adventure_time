import React from "react";

const OpeningMessage = () => {
    return (
    <>
        <div className='spalsh-image-2'>
            <div>
                <p className="top-sent top-home-sent">Get down</p>
                <p className="bottom-sent top-home-sent">and get JIGGY!</p>
                <button onClick={() => window.scrollTo({left: 0, top: 580, behavior: 'smooth'})} className="event-button">Find your next event</button>
            </div>
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
}

export default OpeningMessage
