import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    cars: [],
    carForUpdate: null,
    trigger: null

}

const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setCars: (state, action) => {
            state.cars = action.payload
        },
        changeTrigger: (state) => {
           state.trigger =  !state.trigger
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload
        }
    }
})

const {reducer: carsReducer , actions} = carsSlice
const carsActions = {...actions}

export {
    carsActions, carsReducer
}