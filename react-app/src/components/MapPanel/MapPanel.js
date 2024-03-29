import React from "react";

import Map from '../Map/Map'
import PromoterPanel from "../PromoterPanel/PromoterPanel";



const MapPanel = ({event, thisVenue, user, follower, unfollow, follow, follow_me}) => {

  console.log(thisVenue)

    return (
    <>
      <div className='map-info-container'>
          <div>
            <div className='map-info-marker map-info-marker-top'>
              {/* <div className='map-info-holder'>
                <img alt='map_marker_pic' className='map-info-marker-pic'src={event?.user?.image} />
                
              <div className='map-info-naem'>
                <div className='map-info-marker'>{event?.user?.first_name}</div>
                <div className='map-info-marker'>{event?.user?.last_name}</div>
              </div>
                <div className='map-info-marker'>{event?.user?.email}</div>
              </div> */}
            </div>
              {/* <div className='map-info-marker'>
                { event?.host_id !== user.id ?
                <p className='follower-number'>{  ( follow_me ) ?
                <button value={follower[0]?.id} onClick={(e) => unfollow(follow_me.id) }
                className='unfollow-me-button'>following</button> :
                <button onClick={() => follow()} className='follow-me-button'>follow</button> }</p> :
                null}
              </div> */}
          </div>
          {/* <PromoterPanel event={event}/> */}

          <div className=''>
            <div className='map-info-map'>

            <div>
              <Map props={{latitude: (+thisVenue?.latitude), longitude:(+thisVenue?.longitude), zoom:18}} style={{ height: '50vh', width: '10%' }} />
            </div>

            </div>
          </div>

          <div className='map-map-info-box'>
            <div className='map-info-map-big top'>{event?.name}</div>
            <div className='map-info-map-small'>at</div>
            <div className='map-info-map-big'>{thisVenue?.name}</div>
            <div className='map-info-map-small'>{thisVenue?.address} {thisVenue?.city}, {thisVenue?.state } {thisVenue?.zip_code}</div>
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
