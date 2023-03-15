
import React, { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
import { useSelector, useDispatch  } from 'react-redux';


import './SideScroll.css'
import all_slide_events from '../../store/side_event';

const SideScroll = ({event_number}) => {

    const dispatch = useDispatch()
//   const sessionUser = useSelector(state => state.session.user)
  const events = useSelector(state => state.session.user)



    useEffect(() => {
        // dispatch(all_slide_events())
    }, [])

  let content = null

  if (true) {
    content = (
    <>
    <div className="searchbar-container">
      <input
        placeholder='Search events'
        className='search-input'
      />
      <button className='cancel-button' onClick={() => null}>This is a side scroll{event_number}</button>
    </div>
    </>
    )
  }

  return (
    <>
      {content}
    </>
  );
}

export default SideScroll;
