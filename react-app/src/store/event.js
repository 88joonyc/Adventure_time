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

const remove = () => ({
    type: REMOVE_EVENT
})

export const all_events = (payload) => async dispatch => {
    const res = await fetch(`/api/events/${id}`)
    const events = await res.json()
    dispatch(load(events))
}

export const create_event = (payload) => async dispatch => {
    const res = await fetch('/api/events/', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload)
    }),
    const data = res.json()
    if (res.ok) {
        dispatch(add(data))
        if (data.errors) return data.errors
    }
    return data
}

export const edit_event = (host_id, venue_id, category_id, name, start_time, end_time, capacity, image, cost) => async dispatch => {
    const res = await fetch('/api/events/', {
        method: 'PUT',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            host_id,
            venue_id,
            category_id,
            name,
            start_time,
            end_time,
            capacity,
            image,
            cost
        })
    }),
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
    dispatch(remove(res))
    return res
}

const initialState = {}

const events_reducer = (state = initialState, action ) => {
    switch (action.type) {
        case: LOAD:
    }
}
