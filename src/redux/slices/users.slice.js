import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    users: []
}

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {
        setAll: (state, action) => {
            state.users = action.payload
        },

        create: (state, action) => {
            state.users.push(action.payload)
        }

    }
})


const {reducer: usersReducer, actions} = usersSlice
const usersActions = {...actions}

export {usersActions, usersReducer}

