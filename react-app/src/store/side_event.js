const LOAD = 'eventss/LOAD'
const ADD_EVENT = 'events/ADD_EVENT'

const load = (events) => ({
    type: LOAD,
    events
})

export const all_slide_events = () => async dispatch => {
    const res = await fetch(`/api/events`)
    const events = await res.json()
    dispatch(load(events))
}

const initialState = {events: null}
const side_events_reducer = (state = initialState, action ) => {
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
            return { events: action.events }

        default:
            return state
    }

}

export default side_events_reducer
