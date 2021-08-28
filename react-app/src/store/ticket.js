const LOAD = 'tickets/LOAD'
const ADD_TICKET = 'tickets/ADD_TICKET'
const REMOVE_TICKET = 'tickets/REMOVE_TICKET'

const load = (tickets) => ({
    type: LOAD,
    tickets
})

const add = (tickets) => ({
    type: ADD_TICKET,
    tickets
})

const remove = (ticketId) => ({
    type: REMOVE_TICKET,
    ticketId
})

export const all_tickets = () => async dispatch => {
    const res = await fetch(`/api/tickets/`)
    const tickets = await res.json()
    dispatch(load(tickets))
}

export const one_ticket = (id) => async dispatch => {
    const res = await fetch(`/api/tickets/${id}`)
    const tickets = await res.json()
    dispatch(load(tickets))
}

export const create_ticket = (payload) => async dispatch => {

    const res = await fetch('/api/tickets/', {
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

export const delete_ticket = (id) => async dispatch => {
    const res = await fetch(`/api/tickets/remove/${id}`, {
        method: 'DELETE',
    })
    dispatch(remove(id))
    return res
}

const initialState = null

const tickets_reducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOAD:
           if (state) {
                const tickets = []
                const all = {
                    ...state
                }
                if (action.tickets.tickets) {
                    action.tickets.tickets.forEach((ticket => {
                        tickets.push(all[ticket.id] = ticket)
                    }))
                }
                return {"tickets": tickets }
            }
        case ADD_TICKET:
            return { events: action.events }

        case REMOVE_TICKET:
            const data = {...state};
            let tix = delete data[action.ticketId]
            return data

        default:
            return state
    }
}

export default tickets_reducer
