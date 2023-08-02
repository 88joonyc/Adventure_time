import React from "react";
import moment from "moment";

const CardInfo = ({event}) => {
    return (
        
        <div className='card-info-container'>
            <div className='event-name-conatianer'>
                { event?.name?.length < 50 ? <p className='card-print card-name-home-short'>{event?.name}</p> : <p className='card-print card-name-home-long'>{event?.name}</p> }
            </div>
            {/* <p className='card-print'>{event.category.type}</p> */}
            <p hidden={true} className='card-print'>{event?.description}</p>
            <p className='card-print card-date'>{moment((event?.startTime)).add(5, 'hours').format('ddd, MMM D, h:mm A')}</p>
            {/* <p className='card-print'>{moment(event.endTime).format('ddd, MMM D, h:mm A')}</p> */}
            <p className='card-print card-venue-home'>{event?.venue.name} • {event.venue.city}</p>
            <p className='card-print card-cost-home'>Starts at ${event?.cost}</p>
            {/* <p className='card-print card-user-home'>{event.user?.email}</p> */}
            <p className='card-print card-cap-home'>Limited to: {event?.capacity} seats!</p>
            <p className='card-print card-cap-followers'> {<img alt='' className='home-card-followers-img'/>} {event?.followers?.length} followers </p>
        </div>
        
    )
}

export default CardInfo
