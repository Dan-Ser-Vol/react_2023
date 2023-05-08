import {ICar, IError} from "../../interfaces";
import {createAsyncThunk, createSlice, isFulfilled, isRejectedWithValue, PayloadAction} from "@reduxjs/toolkit";
import {carService} from "../../services";
import {AxiosError} from "axios";


interface IState {
    cars: ICar[]
    errors: IError
    trigger: boolean
    carForUpdate: ICar | null
}

const initialState: IState = {
    cars: [],
    errors: null,
    trigger: true,
    carForUpdate: null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll()
            return data

        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    })

const create = createAsyncThunk< void, { car: ICar }>("carSlice/create",
    async ({car}, {rejectWithValue} )=> {
    try {
        await carService.create(car)
    }catch (e) {
const err = e as AxiosError
        return rejectWithValue(err.response.data)
    }
})


const updateCar = createAsyncThunk<void, { id:number, car:ICar}>("carSlice/updateCar",
    async ({id, car}, {rejectWithValue}) => {
        try {
            await carService.updateById(id, car)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    }
    )


const deleteCar = createAsyncThunk< void, { id: number}>("carSlice/deleteCar",
    async ({id} , {rejectWithValue} )=> {
        try {
            await carService.deleteById(id)
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response.data)
        }
    })

const slice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        setCarForUpdate: (state, action: PayloadAction<ICar>) => {
            state.carForUpdate = action.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action:PayloadAction<ICar[]>) => {
                state.cars = action.payload
            })
            .addCase(updateCar.fulfilled, state => {
                state.carForUpdate = null
            })
            .addMatcher(isFulfilled(updateCar, create, deleteCar), state => {
                state.trigger = !state.trigger
            })
            .addMatcher(isFulfilled(), state => {
                state.errors = null
            })
            .addMatcher(isRejectedWithValue(), (state, action: PayloadAction<IError>) => {
                state.errors = action.payload

            })
})


const {actions, reducer: carReducer} = slice
const carActions = {...actions, getAll, create, deleteCar, updateCar}

export {
    carActions, carReducer
}
