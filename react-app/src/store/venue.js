const LOAD = 'venue/LOAD'

const load = (venues) => ({
    type: LOAD,
    venues
})

export const all_venues = () => async dispatch => {
    const res = await fetch(`/api/venues/`)
    const venues = await res.json()
    dispatch(load(venues))
}


const initialState = {}

const venues_reducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOAD:
            if (state) {
                state = null
                const all = {
                    ...state
                }
                if (action.venues.venues) {
                    action.venues.venues.forEach((venue => {
                        all[venue.id] = venue
                    }))
            }
        }
        default:
            return state
    }

}



export default venues_reducer
