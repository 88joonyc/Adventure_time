import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, Link, useHistory } from 'react-router-dom';
import { create_event } from '../../../store/event';

import NavBar from '../../NavBar/NavBar';


import './Host.css'

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

  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const handleSubmit =  async (e) => {
      console.log(start_time.split("T").join(" ").concat(":00"))
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
                    <label> description
                        <textarea
                            type="text"
                            onChange={(e) => setDescript(e.target.value)}
                            required="true"
                        />
                    </label>
                </div>
                <div>
                    <label> start_day
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
