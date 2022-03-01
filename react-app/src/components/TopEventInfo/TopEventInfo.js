import React from "react";
import moment from "moment";

const TopEventInfo = ({event}) => {

    // const deletethisevent = async () => {
    //     const ask = window.confirm("are you sure you want to delete your event?")
    //     if (ask) {
    //         await dispatch(delete_event(eventId.eventId))
    //         history.push('/')
    //     }
    // }

    // const findedit = () => {
    //     setVenue(event?.events[0]?.venue_id)
    //     setCategory(event?.events[0]?.category_id)
    //     setName(event?.events[0]?.name)
    //     setDescript(event?.events[0]?.description)
    //     setStart(moment(event?.events[0]?.start_time).add(5, 'hours').format('MMM D YYYY HH:mm:ss'))
    //     setEnd(moment(event?.events[0]?.end_time).add(5, 'hours').format('MMM D YYYY HH:mm:ss'))
    //     setCap(event?.events[0]?.capacity)
    //     setImg(event?.events[0]?.image)
    //     setCost(event?.events[0]?.cost)
    // }

    return (
        <></>
        // <div className="event-page-card">
        //     <div>
        //         <p>{moment(event?.events[0]?.start_time).format('MMM do')}</p>
        //         {(event?.events[0]?.name.toString().length > 50)
        //         ? <p className='events-page-card-naem-long'>{event?.events[0]?.name}</p>
        //         : <p className='events-page-card-naem-short'>{event?.events[0]?.name}</p>
        //         }
        //         {(event?.events[0]?.name.toString().length > 100)
        //         ? <p className='events-page-card-naem-very-long'>{event?.events[0]?.name}</p>
        //         : null
        //         }
        //         <p className='event-card-basic-info event-name-info'>By: {event?.events[0]?.host?.first_name} {event?.events[0]?.host?.last_name} </p>
        //         <p className='event-card-basic-info'>Contact: {event?.events[0]?.host?.email} </p>
        //         { event?.events[0]?.host_id !== user.id
        //         ?  <p className='follower-number'>{event?.events[0]?.followers?.length} followers
        //         { follower
        //             ? <button value={follower[0]?.id}
        //             onClick={(e) => unfollow(e)}
        //             className='unfollow-me-button'>following</button>
        //             : <button onClick={() => follow()} className='follow-me-button'>follow</button>
        //         }</p>
        //         : null
        //         }
        //         { event?.events[0]?.host_id !== user.id
        //         ?
        //         <p className='ticket-message'>
        //             {ticket
        //             ?
        //             <p className='ticket-message-inner'> You are going! </p>
        //             :
        //             <p className='ticket-message-inner'> You are not going! </p>
        //             }</p>
        //         : <> <p className='ticket-message-inner'> This is your event! </p>
        //         <button className='editable-event'
        //             onClick={() => (toggleEdit(!editForm), findedit())}
        //             type='button'>edit this event
        //         </button>
        //         <br/>
        //         <button className='deletable-event'
        //             onClick={() => deletethisevent()}
        //             type='button'>delete this event
        //         </button> </>
        //         }
        //         { event?.events[0]?.host_id !== user.id
        //         ? event?.events[0]?.cost
        //         ? <p className='ticket-prices-start'>Tickets start at: ${event?.events[0]?.cost}</p>
        //         : <p className='ticket-prices-start'>Free</p>
        //         : null
        //         }
        //     </div>
        // </div>
    )
}

export default TopEventInfo
