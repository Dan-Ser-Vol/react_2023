import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {toast} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';

import {carService} from '../../../services/car.service';
import {carValidator} from '../../../validators/car.validator';
import style from './CarForm.module.css'
import {carsActions} from '../../../redux';


const CarForm = () => {
    const {carForUpdate} = useSelector(state => state.cars)

    const {
        register,
        handleSubmit,
        reset, setValue,
        formState: {errors, isValid}
    } = useForm({mode: 'all', resolver: joiResolver(carValidator)})

   const dispatch  = useDispatch()

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, isValid, setValue])

    const notifySuccess = (message) => toast.success(message,
        {
            position: 'top-center',
            autoClose: 1500,
        }
    )

    const createNewCar = async (carData) => {
        try {
            await carService.create(carData)
            reset()
            dispatch(carsActions.changeTrigger())
            notifySuccess('Авто створено')
        } catch (err) {
            console.log(err);
        }
    }

    const updateCar = async (carData) => {
        try {
            await carService.updateById(carForUpdate.id, carData);
            notifySuccess('Авто було оновленно!')
            dispatch(carsActions.changeTrigger())
            dispatch(carsActions.setCarForUpdate(null))
            reset()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(carForUpdate ? updateCar : createNewCar)}>
                <label>
                    <div>Brand________________________</div>
                    <input  {...register('brand',)}/>
                </label>
                {errors.brand && <div className={style.error_block}>{errors.brand.message}</div>}

                <label>
                    <div> Price_________________________</div>
                    <input  {...register('price',)}/>
                </label>
                {errors.price && <div className={style.error_block}>{errors.price.message}</div>}

                <label>
                    <div>Year__________________________</div>
                    <input {...register('year',)}/>
                </label>
                {errors.year && <div className={style.error_block}>{errors.year.message}</div>}

                <button disabled={!isValid}>{carForUpdate ? 'UPDATE' : 'CREATE'}</button>
            </form>
        </>

    );
};

export default CarForm;