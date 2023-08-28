const LOAD = 'venue/LOAD'
const ADD_VENUE = 'venue/ADD_VENUE'

const load = (venues) => ({
    type: LOAD,
    venues
})

const add = (venue) => ({
    type: ADD_VENUE,
    venue
})


export const all_venues = () => async dispatch => {
    const res = await fetch(`/api/venues/`)
    const venues = await res.json()
    dispatch(load(venues))
}


export const create_venue = (name, address, city, state, zip_code, latitude, longitude) => async dispatch => {

    const res = await fetch('/api/venues/', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({
            name,
            address,
            city,
            state,
            zip_code,
            latitude,
            longitude
        })
    })
    const data = res.json()
    if (res.ok) {

        await dispatch(add(data))
        if (data.errors) return data.errors
    }
    return data
}


const initialState = { venues: null}

const venues_reducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOAD:
            if (state) {
                const venues = []
                const all = {}
                let listed 
                if (action.venues.venues) {
                    listed = action.venues.venues.forEach(venue => {
                        all[venue.id] = venue
                    })

                    action.venues.venues.forEach((venue => {
                        venues.push(all[venue.id] = venue)
                    }))
                }
                return {
                    "venues": venues,
                    "listed": all
                }
        }
        case ADD_VENUE: {
            return {venue: action.venue}
        }
        default:
            return state
    }

}



export default venues_reducer
