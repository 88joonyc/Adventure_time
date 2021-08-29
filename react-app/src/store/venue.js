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


const initialState = { venues: null}

const venues_reducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOAD:
            if (state) {
                const venues = []
                const all = {
                    ...state
                }
                if (action.venues.venues) {
                    action.venues.venues.forEach((venue => {
                        venues.push(all[venue.id] = venue)
                    }))
                }
                return {"venues": venues }
        }
        default:
            return state
    }

}



export default venues_reducer
