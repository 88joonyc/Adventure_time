import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {  useHistory } from 'react-router-dom';
import { all_tickets } from '../../../store/ticket';

// import './Host.css'

const TicketPage = () => {
  const [errors, setErrors] = useState([]);

  const category = useSelector(state => (state?.categories_reducer?.categories));
  const venue = useSelector(state => state?.venues_reducer?.venues);

  const dispatch = useDispatch();
  const history = useHistory()

//   const handleSubmit =  async (e) => {
//     //   console.log(start_time.split("T").join(" ").concat(":00"))
//       e.preventDefault()x
//       const payload = {
//
//       }

//       let data = await dispatch(create_event(payload))
//       if (data) {
//         history.push('/')
//       }

//       return data
//   }

  useEffect( async () => {
    dispatch(all_tickets())

  }, [])


  let venue_content = null

//   const filter = (memory, query) => {
//       return memory?.filter((brain) => {
//           const venue_name = brain.name.toLowerCase()
//           const venue_address = brain.address.toLowerCase()
//           if (venue_name.includes(query)) return venue_name.includes(query)
//           if (venue_address.includes(query)) return venue_address.includes(query)
//       })

//   }

//   const place = filter(venue, venue_search)


  return (
        <>

        </>
  );
};

export default TicketPage;
