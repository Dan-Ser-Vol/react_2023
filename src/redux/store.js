import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {carsReducer, commentsReducer, usersReducer} from './slices';



const rootReducer = combineReducers({
    cars: carsReducer,
    users: usersReducer,
    comments: commentsReducer,
})

 const setupStore = () => configureStore({
    reducer: rootReducer
})

export {
    setupStore
}