import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    comments: []
}

const commentsSlice = createSlice({
    name: 'commentsSlice',
    initialState,
    reducers: {
        setAll: (state, action) => {
            state.comments = action.payload
        },

        create: (state, action) => {
            state.comments.push(action.payload)
        }

    }
})


const {reducer:commentsReducer, actions} = commentsSlice
const commentsActions = {...actions}

export {commentsActions, commentsReducer}

