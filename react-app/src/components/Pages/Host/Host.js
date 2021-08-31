import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory } from 'react-router-dom';
import { create_event  } from '../../../store/event';
import { all_categories } from '../../../store/category';
import { all_venues } from '../../../store/venue';

import './Host.css'

const HostForm = () => {
//   const [errors, setErrors] = useState([]);
  const [venue_id, setVenue] = useState('');
  const [category_id, setCategory] = useState('');
  const [name, setName] = useState('');
  const [description, setDescript] = useState('');
  const [start_time, setStart] = useState('');
  const [end_time, setEnd] = useState('');
  const [capacity, setCap] = useState('');
  const [image, setImg] = useState('');
  const [cost, setCost] = useState(0);
//   const [venue_search, setVenueSearch] = useState('');

  const category = useSelector(state => (state?.categories_reducer?.categories));
  const venue = useSelector(state => state?.venues_reducer?.venues);

  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit =  async (e) => {
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
    await dispatch(all_categories())
    await dispatch(all_venues())
    textdescripmax()
    textnamemax()
  }, [])


  let venue_content = null

  const filter = (memory, query) => {
      return memory?.filter((brain) => {
          const venue_name = brain.name.toLowerCase()
          const venue_address = brain.address.toLowerCase()
          if (venue_name.includes(query)) return venue_name.includes(query)
          if (venue_address.includes(query)) return venue_address.includes(query)
      })

  }

//   const place = filter(venue, venue_search)

//   if (venue_search) {
//       venue_content = (
//           <>
//           {place?.map(ven => (
//                 <ul>
//                     <li>
//                         <button onClick={() => setVenue(ven?.id)}>{ven?.address}</button>
//                     </li>
//                 </ul>
//             ))}
//             </>
//         )
//     // if (venue_search.toLowerCase().includes()
//   }

let maxdescript
const textdescripmax = () => {
    let amountleft = 5000 - description?.length
    maxdescript = (
        <>
    <p>{amountleft} / 5000 left</p>
    </>
    )
}
let maxname
const textnamemax = () => {
    let amountleft = 255 - name?.length
    maxname = (
        <>
        <p>{amountleft} / 255 left</p>
        </>
    )
}
textdescripmax()
textnamemax()

const runonce = () => {
    dispatch(all_categories())
}

if (!category) {
    runonce()
}

  return (
        <>
        <div className="host-container">
            <form onSubmit={(e) =>{handleSubmit(e)}}>
                <div className="host-card">
                    <img alt='' className="basic-info-img basic-img-settings"/>
                    <div className="info-input">
                        <h2>Basic Info</h2>
                        <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
                        <label> Event Title
                            <input
                                type="text"
                                onChange={(e) => (setName(e.target.value))} // limited to 255 char
                                required="true"
                                className='host-input'
                                placeholder='Be clear and descriptive.'
                            />
                        <b className="required">Title is required* {maxname}</b>

                        </label>
                        <div>
                            <label> Category selection:
                                <select
                                    type="number"
                                    value={category_id}
                                    onChange={(e) => setCategory(e.target.value)}
                                    required="true"
                                    className='host-input'
                                >
                                    <option>select</option>
                                    {category?.map(cat => (
                                        <option value={cat?.id}>{cat?.type}</option>
                                    ))}
                                </select>
                                <b className="required">Category is required*</b>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="host-card">
                    <img alt='' className="location-info-img basic-img-settings"/>
                    <div className="info-input">
                        <h2>Location</h2>
                        <p>Help people in the area discover your event and let attendees know where to show up.</p>
                        <label> Venue location
                            {/* <input
                                type="number"
                                value={venue_id}
                                onChange={(e) => setVenue(e.target.value)}
                                required="true"
                                // placeholder="search for a venue address"
                                hidden='true'
                            /> */}
                            {/* <input
                                type="text"
                                value={venue_search}
                                onChange={(e) => setVenueSearch(e.target.value)}
                                // required="true"
                                placeholder="search for a venue address"
                            />
                            {venue_content} */}
                            <select
                                type="number"
                                value={venue_id}
                                onChange={(e) => setVenue(e.target.value)}
                                required="true"
                                className='host-input'
                            >
                                <option>select</option>
                                {venue?.map(ven => (
                                    <option value={ven.id}>{ven.name}, address: {ven.address} {ven.city}, {ven.state}</option>
                                ))}
                            </select>
                        </label>
                        <b className="required">Venue is required*</b>
                    </div>
                </div>
                <div className="host-card">
                    <img alt='' className='basic-img-settings capacity-img'/>
                    <div className="info-input">
                        <h2>Capacity</h2>
                        <b>Tell us how many attendees can register at maximum.</b>
                        <label>
                            <input
                                type='number'
                                onChange={(e) => setCap(e.target.value)}
                                required="true"
                                className='host-input'
                            />
                            <b className="required">Capacity is required*</b>
                        </label>
                    </div>
                </div>
                <div className="host-card">
                    <img alt='' className='basic-img-settings date-img'/>
                    <div className="info-input">
                        <h2>Date and time</h2>
                        <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
                            <label> Start date and time
                                <input
                                    type="datetime-local"
                                    onChange={(e) => setStart(e.target.value)}
                                    required="true"
                                    className='host-input'
                                />
                            </label>
                        <div>
                            <label> End date and time
                                <input
                                    type='datetime-local'
                                    onChange={(e) => setEnd(e.target.value)}
                                    required="true"
                                    className='host-input'
                                    />
                                    <b className="required">Start and end times are required*</b>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="host-card">
                    <img alt='' className='basic-img-settings mainimg-img'/>
                    <div className="info-input">
                        <h2>Main Event Image</h2>
                        <p>This is the first image attendees will see at the top of your listing. Use a high quality image: 2160x1080px (2:1 ratio).</p>
                            <label> Image URL:
                                <input
                                    type='text'
                                    onChange={(e) => setImg(e.target.value)} // img is limited to 500 char
                                    className='host-input'
                                />
                            </label>
                        <h3>image preview</h3>
                        <div>
                            {image?.length > 500 ? <img className="bad-image"/> : <img className="good-image" src={image}/> }

                        </div>
                    </div>
                </div>
                <div className="host-card">
                    <img alt='' className='basic-img-settings cos-img'/>
                    <div className="info-input">
                        <h2>Cost</h2>
                        <p>Add details for anys costs associated with attending your event.</p>
                        <label>
                            <input
                                type='number'
                                onChange={(e) => setCost(e.target.value)}
                                required="true"
                                className='host-input'
                            />
                        </label>
                    </div>
                </div>
                <div className="host-card">
                    <img alt='' className='basic-img-settings description-img'/>
                    <div className="info-input">
                    <h2>Description</h2>
                    <p>Add more details to your event like your schedule, sponsors, or featured guests.</p>
                    <label>
                        <textarea
                            type='text'
                            onChange={(e) => setDescript(e.target.value)} // limited to 5000 char
                            required="true"
                            className='host-input text-area'
                            />
                    </label>
                        <b className="required">A short (or long) description is required* {maxdescript}</b>
                    </div>
                </div>
                <button className="host-submit-buttom" type='submit'>+ Create event</button>
            </form>
        </div>
        </>
  );
};

export default HostForm;
