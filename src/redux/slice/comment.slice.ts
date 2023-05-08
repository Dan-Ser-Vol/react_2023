import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IComment} from "../../interfaces";
import {commentService} from "../../services";


interface IState {
    comments: IComment[]
    trigger: boolean

}

const initialState: IState = {
    comments: [],
    trigger: true
}

const getAll = createAsyncThunk<IComment[], void>(
    'commentSlice/getAll',
    async () => {
        try {
            const {data} = await commentService.getAll()
            return data

        } catch (e) {
            const err = e as AxiosError
            console.log(err)

        }
    })

const create = createAsyncThunk<IComment, { comment: IComment }>("commentSlice/create",
    async ({comment}) => {
        try {
          const {data} = await commentService.create(comment)
            return data
        } catch (e) {
            const err = e as AxiosError
            console.log(err)
        }
    })


const slice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.comments = action.payload
            })
            .addCase(create.fulfilled, (state, action) => {
                state.comments.push(action.payload)
                state.trigger = !state.trigger
            })

})


const {actions, reducer: commentReducer} = slice
const commentActions = {...actions, getAll, create}

export {
    commentActions, commentReducer
}
