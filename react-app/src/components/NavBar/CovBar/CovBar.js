
import React, { useState } from 'react';
import { Link  } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './CovBar.css'

const CovBar = () => {
  const sessionUser = useSelector(state => state.session.user)

  const [ searchBar, toggleSearch ] = useState(false)
  const [ eventPage, toggleCreate ] = useState(false)

  let content = null

  if (searchBar) {
    content = (
    <>
    <div className="searchbar-container">
      <input
        placeholder='Search events'
        className='search-input'
      />
      <button className='cancel-button' onClick={() => toggleSearch(!searchBar)}>cancel</button>
    </div>
    </>
    )
  } else {
      content = (
        <nav>
          <div className="">
            <div>

            </div>

<div className='cov-message'>Communities around the world are feeling the effects of the coronavirus (COVID-19) on their live experiences. We’re here to help in any way we can. <Link>Learn more</Link> </div>

            </div>

      </nav>
    )
  }

  return (
    <>
      {content}
      {/* {eventsPage} */}
    </>
  );
}

export default CovBar;
