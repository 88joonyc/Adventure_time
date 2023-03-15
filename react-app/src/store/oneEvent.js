const LOAD = 'oneEvent/LOAD';

const load = (event) => ({
    type: LOAD,
    event
});

export const one_event = (id) => async dispatch => {
    const res = await fetch(`/api/events/${id}`)
    const event = await res.json();
    dispatch(load(event))
};

const initialState = {event:null}

const event_reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            if (state) {
                if (action.event.events) {
                    return {"event": action.event.events[0]}
                }
            }

        default:
            return state
        }
    }

export default event_reducer
