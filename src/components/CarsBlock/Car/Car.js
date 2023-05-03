import React from 'react';
import {useDispatch} from 'react-redux';

import style from './Car.module.css'
import {carsActions} from '../../../redux';

const Car = ({car, deleteCar}) => {
    const dispatch = useDispatch()

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