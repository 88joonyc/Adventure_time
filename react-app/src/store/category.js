const LOAD = 'category/LOAD'

const load = (categories) => ({
    type: LOAD,
    categories
})

export const all_categories = () => async dispatch => {
    const res = await fetch(`/api/categories`)
    const cats = await res.json()
    console.log('====================thsu cats----------------------------------',cats)
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
                // console.log('==================action========================',action.categories.categories)
                console.log('==================all========================',all)
                if (action.categories.categories) {
                    action.categories.categories.forEach((category => {
                        all[category.id] = category.type
                    }))
                }
                return all
        }
        default:
            return state
    }

}


export default categories_reducer
