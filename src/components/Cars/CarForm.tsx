import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {ICar} from "../../interfaces";
import {carValidator} from "../../validators/car.validator";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carActions} from "../../redux";


const CarForm: FC = () => {
    const {carForUpdate} = useAppSelector(state => state.carReducer)
    const dispatch = useAppDispatch()

    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidator)
    })


    useEffect(() => {
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})
                }
            })
        }
    }, [carForUpdate, setValue])


    const save: SubmitHandler<ICar> = async (car) => {
        await dispatch(carActions.create({car}))
        reset()
    }

    const update: SubmitHandler<ICar> = async (car) => {
        dispatch(carActions.updateCar({id: carForUpdate.id, car}))
        reset()
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'Enter brand'} {...register('brand')}/>
                <input placeholder={'Enter brand'} {...register('price')}/>
                <input placeholder={'Enter year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate ? 'UPDATE' : 'SAVE'}</button>
            </form>
            <div>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </div>
        </div>
    );
};

export {CarForm};