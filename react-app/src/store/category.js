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

const initialState = { categories : null}

const categories_reducer = (state = initialState, action ) => {
    switch (action.type) {
        case LOAD:
            if (state) {
                const cats = []
                const all = {
                    ...state
                }
                if (action.categories.categories) {
                    action.categories.categories.forEach((category => {
                        cats.push(all[category.id] = category)
                    }))
                }
                return {"categories": cats }
        }
        default:
            return state
    }

}


export default categories_reducer
