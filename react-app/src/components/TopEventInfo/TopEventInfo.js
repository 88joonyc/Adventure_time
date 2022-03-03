import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import moment from "moment";

import {delete_event} from '../../store/event';

const TopEventInfo = ({event, eventId, setVenue, setCategory, setName, setDescript, setStart, setEnd, setCap, setImg, setCost, user, follower, unfollow, follow, ticket, toggleEdit, editForm}) => {

    const dispatch = useDispatch()
    const history = useHistory()

    const deletethisevent = async () => {
        const ask = window.confirm("are you sure you want to delete your event?")
        if (ask) {
            await dispatch(delete_event(eventId.eventId))
            history.push('/')
        }
    }

    const findedit = () => {
        setVenue(event?.venue_id)
        setCategory(event?.category_id)
        setName(event?.name)
        setDescript(event?.description)
        setStart(moment(event?.start_time).add(5, 'hours').format('MMM D YYYY HH:mm:ss'))
        setEnd(moment(event?.end_time).add(5, 'hours').format('MMM D YYYY HH:mm:ss'))
        setCap(event?.capacity)
        setImg(event?.image)
        setCost(event?.cost)
    }

    return (
        <div className="event-page-card">
            <div>
                <p>{moment(event?.start_time).format('MMM do')}</p>
                {(event?.name.toString().length > 50)
                ? <p className='events-page-card-naem-long'>{event?.name}</p>
                : <p className='events-page-card-naem-short'>{event?.name}</p>
                }
                {(event?.name.toString().length > 100)
                ? <p className='events-page-card-naem-very-long'>{event?.name}</p>
                : null
                }
                <p className='event-card-basic-info event-name-info'>By: {event?.host?.first_name} {event?.host?.last_name} </p>
                <p className='event-card-basic-info'>Contact: {event?.host?.email} </p>
                { event?.host_id !== user.id
                ?  <p className='follower-number'>{event?.followers?.length} followers
                { follower
                    ? <button value={follower[0]?.id}
                    onClick={(e) => unfollow(e)}
                    className='unfollow-me-button'>following</button>
                    : <button onClick={() => follow()} className='follow-me-button'>follow</button>
                }</p>
                : null
                }
                { event?.host_id !== user.id
                ?
                <p className='ticket-message'>
                    {ticket
                    ?
                    <p className='ticket-message-inner'> You are going! </p>
                    :
                    <p className='ticket-message-inner'> You are not going! </p>
                    }</p>
                : <> <p className='ticket-message-inner'> This is your event! </p>
                <button className='editable-event'
                    onClick={() => (toggleEdit(!editForm), findedit())}
                    type='button'>edit this event
                </button>
                <br/>
                <button className='deletable-event'
                    onClick={() => deletethisevent()}
                    type='button'>delete this event
                </button> </>
                }
                { event?.host_id !== user.id
                ? event?.cost
                ? <p className='ticket-prices-start'>Tickets start at: ${event?.cost}</p>
                : <p className='ticket-prices-start'>Free</p>
                : null
                }
            </div>
        </div>
    )
}

export default TopEventInfo
