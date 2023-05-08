import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
import {userService} from "../../services";
import {AxiosError} from "axios";


interface IState {
    users: IUser[]
    trigger: boolean
}

const initialState:IState = {
    users:[],
    trigger: true
}

const getAll = createAsyncThunk< IUser[], void>("userSlice/getAll", async () => {
   try {
       const {data} = await userService.getAll()
       return data
   }catch (e) {
       const err = e as AxiosError
       console.log(err)
   }
})

const create = createAsyncThunk<IUser, { user: IUser }>("userSlice/create",
    async ({user}) => {
        try {
            const {data} = await userService.create(user)
            return data
        } catch (e) {
            const err = e as AxiosError
            console.log(err)
        }
    })


const slice = createSlice({
    name: "userSlice",
    initialState,
    reducers:{},
    extraReducers: builder => builder
        .addCase(getAll.fulfilled, (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        })
        .addCase(create.fulfilled, (state, action:PayloadAction<IUser>) => {
            state.users.push(action.payload)
        })

})


const {actions, reducer: userReducer} = slice
const userActions = {...actions, getAll, create}

export {userActions, userReducer}

