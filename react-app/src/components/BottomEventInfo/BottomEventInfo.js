import React from "react";
import moment from "moment";

const BottomEventInfo = ({event}) => {

    return (
        <div className='event-page-bot-grid'>
              <div className='events-main-cont-container'>
                <div className='events-main-cont'>
                  <div class='events-description-text'>
                    <p>
                      {moment(event?.events[0]?.startTime).format('MMM do')}
                      - SINGLE DAY PASS - One (1) general admission RSVP to attend&nbsp;
                    {event?.events[0]?.name} in {event?.events[0]?.venue?.city},&nbsp;
                    {event?.events[0]?.venue?.state}
                    </p>
                    <h2 className="events-description-label">About this event</h2>
                    <p className="events-description-innertext">{event?.events[0]?.description}</p>
                    <div className="tags">Tags</div>
                  </div>
                </div>
              </div>
              <div className='side-panel-container'>
                <div className='event-page-sidepanel'>
                    <div className="events-info-label">
                      <p>Capacity:</p>
                    </div>
                    <div className='events-address-para'>
                      <p>{event?.events[0]?.capacity}</p>
                    </div>
                    <div className="events-info-label">
                      <p>Category:</p>
                    </div>
                    <div className='events-address-para'>
                      <p>{event?.events[0]?.category?.type}</p>
                    </div>
                    <p>Date and time</p>
                    <p>Starts: </p>
                    <p className='startend-times'>{moment(event?.events[0]?.startTime).add(5, 'hours').format('ddd[,] MMMM Do [,] YYYY [at] h:mm A')}</p>
                    <p>Ends:</p>
                    <p className='startend-times'>{moment(event?.events[0]?.endTime).add(5, 'hours').format('dddd[,] MMMM Do[,] YYYY [at] h:mm A')}</p>

                    <p className="events-address-label">Location:</p>
                    <div className='events-page-location'>
                      <p className="events-address-para">{event?.events[0]?.venue?.name}</p>
                      <p className="events-address-para">{event?.events[0]?.venue?.address}</p>
                      <p className="events-address-para">{event?.events[0]?.venue?.city}, {event?.events[0]?.venue?.state}</p>
                      <p className="events-address-para">{event?.events[0]?.venue?.zip_code}</p>
                      <p className="events-address-para">Lat: {event?.events[0]?.venue?.latitude} Lon: {event?.events[0]?.venue?.longitude} </p>
                      <button className='view-map-button' onClick={() => document.querySelector('.the-real-map').scrollIntoView({behavior: 'smooth'})}>view map</button>
                    </div>
                    <p className="events-address-label">Refund Policy: </p>
                    <p  className="events-address-para">Contact the organizer to request a refund. Adventure Time's fee is nonrefundable. </p>
                </div>
            </div>
        </div>
    )
}

export default BottomEventInfo
