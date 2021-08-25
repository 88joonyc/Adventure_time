import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link } from 'react-router-dom';
import { create_event } from '../../../store/event';

import NavBar from '../../NavBar/NavBar';


import './Host.css'

const HostForm = () => {
  const [errors, setErrors] = useState([]);
  const [venue_id, setVenue] = useState('');
  const [category_id, setCategory] = useState('');
  const [name, setName] = useState('');
  const [start_time, setStart] = useState('');
  const [end_time, setEnd] = useState('');
  const [capacity, setCap] = useState('');
  const [image, setImg] = useState('');
  const [cost, setCost] = useState('');

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const handleSubmit =  async (e) => {
      e.preventDefault()
      const payload = {
        venue_id,
        category_id,
        name,
        start_time,
        end_time,
        capacity,
        image,
        cost,
      }

      let data = await dispatch(create_event(payload))
      return data
  }


  return (
        <>
        <NavBar/>
        <div>
            <form onSubmit={(e) =>{handleSubmit(e)}}>
                <div>
                    <label> venue_id
                        <input
                            type="number"
                            value={venue_id}
                            onChange={(e) => setVenue(e.target.value)}
                            required="true"
                        />
                    </label>
                </div>
                <div>
                    <label> category_id
                        <input
                            type="number"
                            value={category_id}
                            onChange={(e) => setCategory(e.target.value)}
                            required="true"
                        />
                    </label>
                </div>
                <div>
                    <label> name
                        <input
                            type="text"
                            onChange={(e) => setName(e.target.value)}
                            required="true"
                        />
                    </label>
                </div>
                <div>
                    <label> start_day
                        <input
                            type="date"
                            onChange={(e) => setStart(e.target.value)}
                            required="true"
                        />
                    </label>
                    <label> start_time
                        <input
                            type="time"
                        />
                    </label>
                </div>
                <div>
                    <label> end_day
                        <input
                            type='date'
                            onChange={(e) => setEnd(e.target.value)}
                            required="true"
                        />
                    </label>
                    <label> end_time
                        <input
                            type='time'
                        />
                    </label>
                </div>
                <div>
                    <label> capacity
                        <input
                            type='number'
                            onChange={(e) => setCap(e.target.value)}
                            required="true"
                        />
                    </label>
                </div>
                <div>
                    <label> Image
                        <input
                            type='text'
                            onChange={(e) => setImg(e.target.value)}
                        />
                    </label>
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
                <button type='submit'>create</button>
            </form>
        </div>
        </>
  );
};

export default HostForm;
