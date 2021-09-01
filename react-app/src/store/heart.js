const LOAD = 'hearts/LOAD'
const ADD_HEART = 'hearts/ADD_HEART'
const REMOVE_HEART = 'hearts/REMOVE_HEART'

const load = (hearts) => ({
    type: LOAD,
    hearts
})

const add = (hearts) => ({
    type: ADD_HEART,
    hearts
})

const remove = (heardId) => ({
    type: REMOVE_HEART,
    heardId
})

export const all_hearts = () => async dispatch => {
    const res = await fetch(`/api/hearts/`)
    const hearts = await res.json()
    dispatch(load(hearts))
}

export const hearted_events = () => async dispatch => {
    const res = await fetch(`/api/hearts/events`)
    const hearts = await res.json()
    dispatch(load(hearts))
}

export const one_heart = (id) => async dispatch => {
    const res = await fetch(`/api/hearts/${id}`)
    const hearts = await res.json()
    dispatch(load(hearts))
}

export const heart = (payload) => async dispatch => {
    const res = await fetch('/api/hearts/', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({event_id: payload})
    })
    const data = res.json()
    if (res.ok) {

        await dispatch(add(data))
        if (data.errors) return data.errors
    }
    return data
}

export const hate = (id) => async dispatch => {
    const res = await fetch(`/api/hearts/remove/${id}`, {
        method: 'DELETE',
    })
    dispatch(remove(id))
    return res
}

const initialState = {heart:null}

const hearts_reducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOAD:
           if (state) {
                const hearts = []
                const all = {
                    ...state
                }
                if (action.hearts.hearts) {
                    action.hearts.hearts.forEach((heart => {
                        hearts.push(all[heart.id] = heart)
                    }))
                }
                return {"hearts": hearts }
            }
        case ADD_HEART:
            return { events: action.events }

        case REMOVE_HEART:
            const data = {...state};
            return data

        default:
            return state
    }
}

export default hearts_reducer
