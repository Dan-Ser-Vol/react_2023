import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {carService} from '../../../services/car.service';
import {joiResolver} from '@hookform/resolvers/joi';
import {carValidator} from '../../../validators/car.validator';
import style from './CarForm.module.css'
import {toast} from 'react-toastify';


const CarForm = ({setAllCars, selectedCar}) => {
    const {
        register,
        handleSubmit,
        reset, setValue,
        formState: {errors, isValid}
    } = useForm({mode: 'all', resolver: joiResolver(carValidator)})

    useEffect(() => {
        if (selectedCar) {
            setValue('brand', selectedCar.brand, {shouldValidate: true})
            setValue('price', selectedCar.price, {shouldValidate: true})
            setValue('year', selectedCar.year, {shouldValidate: true})
        }
    }, [selectedCar])

    const notifySuccess = (message) => toast.success(message,
        {
            position: 'top-center',
            autoClose: 1500,
        }
    )

    const createNewCar = async (carData) => {
        try {
            await carService.create(carData)
            setAllCars(prev => !prev)
            reset()
            notifySuccess('Авто створено')
        } catch (err) {
            console.log(err);
        }
    }

    const updateCar = async (carData) => {
        try {
            await carService.updateById(selectedCar.id, carData);
            setAllCars((prev) => !prev);
            reset();
            notifySuccess('Авто було оновленно!')
        } catch (error) {
            console.error(error);
        }
    };


    return (

        <>
            <form onSubmit={handleSubmit(selectedCar ? updateCar : createNewCar)}>

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

                <button disabled={!isValid}>{selectedCar ? 'UPDATE' : 'CREATE'}</button>

            </form>
        </>

    );
};

export default CarForm;