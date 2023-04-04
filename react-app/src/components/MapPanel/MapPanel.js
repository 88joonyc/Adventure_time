import React from "react";

import Map from '../Map/Map'
import PromoterPanel from "../PromoterPanel/PromoterPanel";



const MapPanel = ({event, user, follower, unfollow, follow, follow_me}) => {

    return (
    <>
      <div className='map-info-container'>
          <div>
            <div className='map-info-marker map-info-marker-top'>
              <div className='map-info-holder'>
                <img alt='map_marker_pic' className='map-info-marker-pic'src={event?.host?.image} />
              <div className='map-info-naem'>
                <div className='map-info-marker'>{event?.host?.first_name}</div>
                <div className='map-info-marker'>{event?.host?.last_name}</div>
              </div>
                <div className='map-info-marker'>{event?.host?.email}</div>
              </div>
            </div>
              <div className='map-info-marker'>
                { event?.host_id !== user.id ?
                <p className='follower-number'>{  ( follow_me ) ?
                <button value={follower[0]?.id} onClick={(e) => unfollow(follow_me.id) }
                className='unfollow-me-button'>following</button> :
                <button onClick={() => follow()} className='follow-me-button'>follow</button> }</p> :
                null}
              </div>
          </div>
          <PromoterPanel event={event}/>

          <div className=''>
            <div className='map-info-map'>

            <div>
              <Map props={{latitude: (+event?.venue?.latitude), longitude:(+event?.venue?.longitude), zoom:18}} style={{ height: '50vh', width: '10%' }} />
            </div>

            </div>
          </div>

          <div className='map-map-info-box'>
            <div className='map-info-map-big top'>{event?.name}</div>
            <div className='map-info-map-small'>at</div>
            <div className='map-info-map-big'>{event?.venue?.name}</div>
            <div className='map-info-map-small'>{event?.venue?.address} {event?.venue?.city}, {event?.venue?.state } {event?.venue?.zip_code}</div>
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
