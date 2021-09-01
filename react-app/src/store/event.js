const LOAD = 'events/LOAD'
const ADD_EVENT = 'events/ADD_EVENT'
const EDIT_EVENT = 'events/EDIT_EVENT'
const REMOVE_EVENT = 'events/REMOVE_EVENT'

const load = (events) => ({
    type: LOAD,
    events
})

const add = (events) => ({
    type: ADD_EVENT,
    events
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

export const one_event = (id ) => async dispatch => {
    const res = await fetch(`/api/events/${id}`)
    const events = await res.json()
    dispatch(load(events))
}

export const create_event = (payload) => async dispatch => {
    const res = await fetch('/api/events/', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload)
    })
    const data = res.json()
    if (res.ok) {

        await dispatch(add(data))
        if (data.errors) return data.errors
    }
    return data
}

export const edit_event = (host_id, venue_id, category_id, name, description, start_time, end_time, capacity, image, cost, id) => async dispatch => {
    const res = await fetch(`/api/events/edit/${id}`, {
        method: 'PUT',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            host_id,
            venue_id,
            category_id,
            name,
            description,
            start_time,
            end_time,
            capacity,
            image,
            cost
        })
    })
    const data = res.json()
    if (res.ok) {
        dispatch(update(data))
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
        case LOAD:
            if (state) {
                state = null
                const all = {
                    ...state
                }
                if (action.events.events) {
                    action.events.events.forEach((event => {
                        all[event.id] = event
                    }))
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
        case ADD_EVENT:
            return { ...state, events: action.events }

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
