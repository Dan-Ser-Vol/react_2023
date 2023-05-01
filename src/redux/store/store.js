import {combineReducers, createStore} from 'redux';
import {dogsReducer} from '../reducers/dogs.reducer';
import {catsReducer} from '../reducers/cats.reducer';



const rootReducer  = combineReducers({
    dogs: dogsReducer,
    cats: catsReducer
})

const store = createStore(
rootReducer
)


export {
    store
}