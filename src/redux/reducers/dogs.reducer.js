const ADD_DOG = 'ADD_DOG'
const DELETE_DOG = 'DELETE_DOG'


const initialState = {
    dogs: []
}
 const dogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DOG :
            const dog = action.payload
            const dogId = state.dogs.slice(-1)[0]?.id + 1 || 1
            dog.id = dogId
            return {...state, dogs: [...state.dogs, dog]}
        case DELETE_DOG:
            const dogIndex = state.dogs.findIndex(value => value.id === action.payload)
            state.dogs.splice(dogIndex, 1)
            return {...state}
        default:
            return state
    }
}

const addDogAction = (dog) => ({type: ADD_DOG, payload: dog})
const deleteDogAction = (id) => ({type: DELETE_DOG, payload: id})

export {
    addDogAction, deleteDogAction, dogsReducer
}