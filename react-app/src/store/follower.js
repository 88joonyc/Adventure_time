const LOAD = 'followers/LOAD'
const ADD_FOLLOWER = 'followers/ADD_FOLLOWER'
const REMOVE_FOLLOWER = 'followers/REMOVE_FOLLOWER'

const load = (followers) => ({
    type: LOAD,
    followers
})

const add = (followers) => ({
    type: ADD_FOLLOWER,
    followers
})

const remove = (followerId) => ({
    type: REMOVE_FOLLOWER,
    followerId
})

export const all_user_follows = () => async dispatch => {
    const res = await fetch(`/api/followers/all`)
    const followers = await res.json()
    dispatch(load(followers))
}

export const get_follower_with_promo = (id) => async dispatch => {
    const res = await fetch(`/api/followers/${id}`)
    const followers = await res.json()
    dispatch(load(followers))
}

export const follow = (payload) => async dispatch => {

    const res = await fetch('/api/followers/', {
        method: 'POST',
        headers: {"Content-Type": 'application/json'},
        body: JSON.stringify({promoter_id: payload})
    })
    const data = res.json()
    if (res.ok) {

        await dispatch(add(data))
        if (data.errors) return data.errors
    }
    return data
}

export const leave_loser = (id) => async dispatch => {
    const res = await fetch(`/api/followers/remove/${id}`, {
        method: 'DELETE',
    })
    dispatch(remove(id))
    return res
}

const initialState = {followers:null}

const followers_reducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOAD:
           if (state) {
                const all = {
                    ...state
                }
                if (action.followers.followers[0]) {
                    return {"followers": action.followers.followers }
                }

            }
        case ADD_FOLLOWER:
            return { events: action.events }

        case REMOVE_FOLLOWER:
            const data = {...state};
            let foll = delete data[action.followerId]
            return data

        default:
            return state
    }
}

export default followers_reducer
