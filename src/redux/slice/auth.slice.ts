import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue, PayloadAction} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IAuth, IErrorAuth, IUser} from "../../interfaces";
import {authService} from "../../services";

interface IState {
    me: IUser
    error: IErrorAuth
}

const initialState: IState = {
    me: null,
    error: null
}

const register = createAsyncThunk<void, IAuth>(
    'authSlice/register', async (user, {rejectWithValue}) => {
        try {
            await authService.register(user)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
)

const login = createAsyncThunk<IUser, IAuth>(
    'authSlice/login', async (user, {rejectWithValue}) => {
        try {
         return  await authService.login(user)
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    })

const me = createAsyncThunk<IUser, void>(
    'authSlice/me',
    async ()=>{
        const {data} =  await authService.me()
        return data
    })


const slice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        resetMe: (state, action: PayloadAction<null>) => {
            state.me = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(login.fulfilled, (state, action: PayloadAction<IUser>) => {
            state.me = action.payload
        })
        .addCase(me.fulfilled, (state, action:PayloadAction<IUser>) =>{
            state.me = action.payload
        })
        .addMatcher(isFulfilled(), state => {
            state.error = null
        })
        .addMatcher(isRejectedWithValue(), (state, action: PayloadAction<IErrorAuth>) => {
            state.error = action.payload as IErrorAuth
        })
})

const {actions, reducer: authReducer} = slice
const authActions = {
    ...actions, register, login, me
}

export {
    authActions, authReducer
}