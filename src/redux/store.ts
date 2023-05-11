import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer, commentReducer, userReducer, authReducer} from "./slice";


const rootReducer = combineReducers({
    carReducer,
    commentReducer,
    userReducer,
    authReducer
})

const setupStore = () => configureStore({
    reducer: rootReducer
})

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState, AppDispatch, AppStore
}

export {setupStore}