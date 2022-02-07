import React from "react";
import { useSelector } from "react-redux";

import Map from '../Map/Map'
import PromoterPanel from "../PromoterPanel/PromoterPanel";



const MapPanel = (user, follower, unfollow, follow) => {

  const event = useSelector(state => (state?.events_reducer?.events));

    return (
    <>
      <div className='map-info-container'>
          <div>
            <div className='map-info-marker map-info-marker-top'>
              <div className='map-info-holder'>
                <img alt='map_marker_pic' className='map-info-marker-pic'src={event?.events[0]?.host?.image} />
              <div className='map-info-naem'>
                <div className='map-info-marker'>{event?.events[0]?.host?.first_name}</div>
                <div className='map-info-marker'>{event?.events[0]?.host?.last_name}</div>
              </div>
                <div className='map-info-marker'>{event?.events[0]?.host?.email}</div>



              </div>
            </div>
              <div className='map-info-marker'>
                { event?.events[0]?.host_id !== user.id ?
                <p className='follower-number'>{  ( follower ) ?
                <button value={follower[0]?.id} onClick={(e) => unfollow(e) }
                className='unfollow-me-button'>following</button> :
                <button onClick={() => follow()} className='follow-me-button'>follow</button> }</p> :
                null}
              </div>
          </div>
          <PromoterPanel />

          <div className=''>
            <div className='map-info-map'>

            <div>
              <Map props={{latitude: Number(event?.events[0]?.venue?.latitude), longitude:(event?.events[0]?.venue?.longitude), zoom:18}} style={{ height: '50vh', width: '10%' }} />
            </div>


            </div>
          </div>

          <div className='map-map-info-box'>
            <div className='map-info-map-big top'>{event?.events[0]?.name}</div>
            <div className='map-info-map-small'>at</div>
            <div className='map-info-map-big'>{event?.events[0]?.venue?.name}</div>
            <div className='map-info-map-small'>{event?.events[0]?.venue?.address} {event?.events[0]?.venue?.city}, {event?.events[0]?.venue?.state } {event?.events[0]?.venue?.zip_code}</div>
            <div className='map-info-map-icons'>
              <div><img className='icon-set icon-plane'/></div>
              <div><img className='icon-set icon-person'/></div>
              <div><img className='icon-set icon-bike'/></div>
              <div><img className='icon-set icon-car'/></div>
            </div>
          </div>

      </div>
    </>
  )

}

export default MapPanel
