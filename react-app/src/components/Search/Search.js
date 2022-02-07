import React from "react";

import { Link } from "react-router-dom";

const Search = ({events, search, setSearch}) => {

    const filter = (memory, query) => {
        return memory?.filter((brain) => {
            const event_name = brain.name.toLowerCase()
            if (event_name.includes(query)) return event_name.includes(query)
        })
    }

    const filteredEvents = filter (events, search)

    let searchField = null
    if (search) (
        searchField = (
            <>
                <div className="search-popup">
                    <div className='searchfield'>
                        {filteredEvents?.map(event => (
                            <Link className='search-link' to={`/event/${event.id}`}>
                                <div className='search-container'>
                                    <p  className='search-link'>{event.name}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </>
        )
    )


    window.addEventListener(("click"), e => {
        setSearch("")
        //   if (search) {
            //   document.querySelector('.venue-search-box').value = ''

        //   }
        //   if (document.querySelector('.venue-search-box').value) {
        //   }

    })

    return (
        <>
            {searchField}
        </>
    )
}

export default Search
