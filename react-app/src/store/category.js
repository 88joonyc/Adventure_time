const LOAD = 'category/LOAD'

const load = (categories) => ({
    type: LOAD,
    categories
})

export const all_categories = () => async dispatch => {
    const res = await fetch(`/api/categories`)
    const cats = await res.json()
    dispatch(load(cats))

}

const initialState = {}

const categories_reducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOAD:
            if (state) {
                const all = {
                    ...state
                }
                if (action.categories.categories) {
                    action.categories.categories.forEach((category => {
                        all[category.id] = category.type
                    }))
                }
                return {"categories": all}
        }
        default:
            return state
    }

}


export default categories_reducer
