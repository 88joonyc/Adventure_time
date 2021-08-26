import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory } from 'react-router-dom';
import { create_event, all_events } from '../../../store/event';
import { all_categories } from '../../../store/category';

import NavBar from '../../NavBar/NavBar';

import './Host.css'
import { all_venues } from '../../../store/venue';

const HostForm = () => {
  const [errors, setErrors] = useState([]);
  const [venue_id, setVenue] = useState('');
  const [category_id, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescript] = useState('');
  const [start_time, setStart] = useState('');
  const [end_time, setEnd] = useState('');
  const [capacity, setCap] = useState('');
  const [image, setImg] = useState('');
  const [cost, setCost] = useState('');
  const [venue_search, setVenueSearch] = useState('');

  const user = useSelector(state => state.session.user);
  const event = useSelector(state => state.events_reducer);
  const category = useSelector(state => (state?.categories_reducer?.categories));
  const venue = useSelector(state => state?.venues_reducer?.venues);

  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit =  async (e) => {
    //   console.log(start_time.split("T").join(" ").concat(":00"))
      e.preventDefault()
      const payload = {
        venue_id,
        category_id,
        name,
        description,
        start_time: start_time.split("T").join(" ").concat(":00"),
        end_time: end_time.split("T").join(" ").concat(":00"),
        capacity,
        image,
        cost,
      }

      let data = await dispatch(create_event(payload))
      if (data) {
        history.push('/')
      }

      return data
  }

  useEffect( async () => {
    dispatch(all_events())
    dispatch(all_categories())
    dispatch(all_venues())
  }, [])


  let venue_content = null

  const filter = (memory, query) => {
      return memory.filter((brain) => {
          const venue_name = brain.name.toLowerCase()
          const venue_address = brain.address.toLowerCase()
          if (venue_name.includes(query)) return venue_name.includes(query)
          if (venue_address.includes(query)) return venue_address.includes(query)
      })

  }

//   const place = filter(venue, venue_search)

  if (venue_search) {
      venue_content = (
          <>
          {/* {place.map(ven => ( */}
                <ul>
                    <li>
                        {/* <button onClick={setVenue(ven.id)}>{ven.address}</button> */}
                    </li>
                </ul>
            {/* ))} */}
            </>
        )
    // if (venue_search.toLowerCase().includes()
  }

  return (
        <>
        <NavBar/>
        <div className="host-container">
            <form onSubmit={(e) =>{handleSubmit(e)}}>
                <div className="host-card">
                    <h2>Basic Info</h2>
                    <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                    <label> Event Title
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            required="true"
                            placeholder='Be clear and descriptive.'
                        />
                    </label>
                    <b>Title is required*</b>
                <div>
                    <label> category_id
                        <select
                            type="number"
                            value={category_id}
                            onChange={(e) => setCategory(e.target.value)}
                            required="true"
                        >
                            <option>select</option>
                            {category?.map(cat => (
                                <option value={cat.id}>{cat.type}</option>
                            ))}
                        </select>
                    </label>
                            <button onClick={() =>console.log(category)}>what</button>
                </div>
                </div>
                <h2>Location</h2>
                <p>Help people in the area discover your event and let attendees know where to show up.</p>
                <div>
                    <label> Venue location
                        <input
                            type="number"
                            value={venue_id}
                            onChange={(e) => setVenue(e.target.value)}
                            required="true"
                            // placeholder="search for a venue address"
                            hidden='true'
                        />
                        <input
                            type="text"
                            value={venue_search}
                            onChange={(e) => setVenueSearch(e.target.value)}
                            // required="true"
                            placeholder="search for a venue address"
                        />
                        {venue_content}
                    </label>
                    <b>Venue is required*</b>
                </div>
                <h2>Capacity</h2>
                <b>Tell us how many attendees can register at maximum.</b>
                <div>
                    <label> capacity
                        <input
                            type='number'
                            onChange={(e) => setCap(e.target.value)}
                            required="true"
                        />
                    </label>
                </div>
                <h2>Date and time</h2>
                <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                <div>
                    <label> Start
                        <input
                            type="datetime-local"
                            onChange={(e) => setStart(e.target.value)}
                            required="true"
                        />
                    </label>
                </div>
                <div>
                    <label> end_day
                        <input
                            type='datetime-local'
                            onChange={(e) => setEnd(e.target.value)}
                            required="true"
                        />
                    </label>
                </div>
                <h2>Main Event Image</h2>
                <p>This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio).</p>
                <div>
                    <label> Image
                        <input
                            type='text'
                            onChange={(e) => setImg(e.target.value)}
                        />
                    </label>
                </div>
                <h3>image preview</h3>
                <div>
                    <img src={image}/>
                </div>
                <div>
                    <label> cost
                        <input
                            type='number'
                            onChange={(e) => setCost(e.target.value)}
                            required="true"
                        />
                    </label>
                </div>
                <h2>Description</h2>
                <p>Add more details to your event like your schedule, sponsors, or featured guests.</p>
                <div>
                    <label> Description
                        <textarea
                            type='text'
                            onChange={(e) => setDescript(e.target.value)}
                            required="true"
                        />
                    </label>
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
        </>
  );
};

export default HostForm;
