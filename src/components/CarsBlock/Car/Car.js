import React from 'react';
import {useDispatch} from 'react-redux';

import style from './Car.module.css'
import {carsActions} from '../../../redux';
import {carService} from '../../../services/car.service';
import {toast} from 'react-toastify';

const Car = ({car}) => {
    const dispatch = useDispatch()

    const notifyWarn = () => toast.warn('Авто було видалене!',
        {
            position: 'top-center',
            autoClose: 2000,
        }
    )

    const deleteCar = async (id) => {
        try {
            await carService.deleteById(id);
            dispatch(carsActions.changeTrigger())
            notifyWarn()
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={style.root}>
            <div> ID: {car.id}</div>
            <div>BRAND: {car.brand}</div>
            <div>PRICE: {car.price}</div>
            <div> YEAR: {car.year}</div>
            <button style={{backgroundColor: '#7BAADD'}} onClick={()=> dispatch(carsActions.setCarForUpdate(car))}>UPDATE</button>
            <button style={{backgroundColor: '#FF0000'}} onClick={() => deleteCar(car.id)}>DELETE</button>
        </div>
    );
};

export default Car;