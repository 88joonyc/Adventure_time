const LOAD = 'events/LOAD'
const ADD_EVENT = 'events/ADD_EVENT'
const EDIT_EVENT = 'events/EDIT_EVENT'
const REMOVE_EVENT = 'events/REMOVE_EVENT'
const ADD_ONE = 'event/ADD_ONE'

const load = (events) => ({
    type: LOAD,
    events
})

const add = (events) => ({
    type: ADD_EVENT,
    events
})

// this is new
const addOne = (event) => ({
    type: ADD_ONE,
    event
})


const update = (event) => ({
    type: EDIT_EVENT,
    event
})

const remove = (eventId) => ({
    type: REMOVE_EVENT,
    eventId
})

export const all_events = () => async dispatch => {
    const res = await fetch(`/api/events/`)
    const events = await res.json()
    dispatch(load(events))
}

export const unregistered_events = () => async dispatch => {
    const res = await fetch(`/api/events/splash/`)
    const events = await res.json()
    dispatch(load(events))
}

export const unregisted_located_events = (id) => async dispatch => {
    const res = await fetch(`/api/events/location/splash/${id}`)
    const events = await res.json()
    dispatch(load(events))
}

export const unregisted_categorized_events = (id) => async dispatch => {
    const res = await fetch(`/api/events/category/splash/${id}`)
    const events = await res.json()
    dispatch(load(events))
}

export const unregisted_cashed_events = (id) => async dispatch => {
    const res = await fetch(`/api/events/cost/splash/${id}`)
    const events = await res.json()
    dispatch(load(events))
}

export const located_events = (id) => async dispatch => {
    const res = await fetch(`/api/events/location/${id}`)
    const events = await res.json()
    dispatch(load(events))
}

export const categorized_events = (id) => async dispatch => {
    const res = await fetch(`/api/events/category/${id}`)
    const events = await res.json()
    dispatch(load(events))
}

export const cashed_events = (id) => async dispatch => {
    const res = await fetch(`/api/events/cost/${id}`)
    const events = await res.json()
    dispatch(load(events))
}




// this is new 
export const get_one_event = (id ) => async dispatch => {
    const res = await fetch(`/api/events/${id}`)
    const event = await res.json()
    await dispatch(addOne(event))
}




export const create_event = (payload) => async dispatch => {
    const res = await fetch('/api/events/', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload),
    })
    const data = await res.json()
    if (res.ok) {

        await dispatch(add(data))
        if (data.errors) return data.errors
    }
    return data
}

export const edit_event = (host_id, venueId, categoryId, name, description, startTime, endTime, capacity, image, cost, id) => async dispatch => {
    const res = await fetch(`/api/events/edit/${id}`, {
        method: 'PUT',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            host_id,
            venue_id: venueId,
            category_id: categoryId,
            name,
            description,
            start_time: startTime,
            end_time: endTime,
            capacity,
            image,
            cost
        })
    })
    const data = res.json()
    if (res.ok) {
        await dispatch(update(data))
        if (data.errors) return data.errors
    }
    return data
}

export const edit_event_capacity = (capacity, id) => async dispatch => {
    const res = await fetch(`/api/events/edit/capacity/${id}`, {
        method: 'PUT',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            capacity,
        })
    })
    const data = res.json()
    if (res.ok) {
        await dispatch(update(data))
        if (data.errors) return data.errors
    }
    return data
}

export const delete_event = (id) => async dispatch => {
    const res = await fetch(`/api/events/remove/${id}`, {
        method: 'DELETE',
    })
    dispatch(remove(id))
    return res
}

const initialState = { events: null}

const events_reducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOAD:{
            const allEvents = {}
            if (action.events.events) {
                action.events.events.forEach((event => {
                    allEvents[event.id] = event
                }))
                return {
                    'events' : action.events.events,
                    'listed': allEvents

                }
            }

        }
        // case LOAD:
        //     if (state) {
        //         const all = {
        //             ...state
        //         }
        //         if (action.events.events) {
        //             return {'events' : action.events.events}
        //     }
        // }
        case ADD_ONE: {
            if(!action.event.events.id) {
                const newState = {
                    ...state,
                    ['events']: action.events,
                };

                const eventList = newState.listed.map((id) => newState[id]);
                eventList.push(action.events.events)
                return newState
            }
            return {
                ...state,
                [action.event.events.id]: {
                    ...state[action.event.events.id],
                    ...action.event.events
                }
            }
        }
        case ADD_EVENT:
            return {
                ...state,
                ['events']: [...state.events, action.events]
            }

        case REMOVE_EVENT:
            const data = {...state};
            return data

        case EDIT_EVENT:
            return {
                ...state,
                [action.event.id]: action.event
            }
        default:
            return state
    }

}

export default events_reducer
