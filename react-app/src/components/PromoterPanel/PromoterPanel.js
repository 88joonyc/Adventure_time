import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import moment from "moment";

const PromoterPanel = ({event}) => {

    return (
    <>
        <h3 className='promo-title'>More events from this organizer</h3>
        <div className='promo-events-box'>
            {event?.events[0]?.promoter?.map(event=> (
            <>
            {/* {event.id != eventId?.eventId ? ( */}

                <Link key='1' className='link-add' to={`/event/${event?.id}`}>
                <div className='promoter-events'>
                <div className='promoter-events-img-container'>
                    <img alt='' className='promoter-event-img' src={event?.image}></img>
                    {event?.cost ? <p className='promoter-event-img-text'> $0 - ${event?.cost}</p> : <p  className='promoter-event-img-text'>FREE</p>}
                </div>
                <div className='promoter-event-info'>
                    <div className='promoter-event-info-content'>
                    <p className='promoter-event-date'>{moment(event?.startTime).format("ddd, MMM do [at] h:mm A")}</p>
                    <p className='promoter-event-name'>{event?.name}</p>
                    </div>
                </div>
                </div>
            </Link>

            {/* // ) : null } */}  {/*  <  this allows for only other events to be showns and not current.. seeds are empty so leave for now. */}
            </>
            ))}
            <div className='the-real-map'/>
        </div>
    </>
    )
}

export default PromoterPanel
