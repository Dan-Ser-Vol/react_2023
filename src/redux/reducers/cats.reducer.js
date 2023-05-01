const ADD_CAT = 'ADD_CAT';
const DELETE_CAT = 'DELETE_CAT';


const initialState = {
    cats: []
}
const catsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CAT:
            const cat = action.payload
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1
            cat.id = catId
            return {...state, cats: [...state.cats, cat]}
        case DELETE_CAT:
    const  catIndex = state.cats.findIndex(value => value.id === action.payload)
            state.cats.splice(catIndex, 1)
            return {...state}
        default:
            return state
    }
}

const addCatAction = (cat) => ({type: ADD_CAT, payload: cat});
const deleteCatAction = (id) => ({type: DELETE_CAT, payload: id});

export {addCatAction, catsReducer, deleteCatAction};