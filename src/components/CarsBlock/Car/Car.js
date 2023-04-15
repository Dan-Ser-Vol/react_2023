import React from 'react';
import style from './Car.module.css'

const Car = ({car, setSelectedCar, deleteCar}) => {
    return (
        <div className={style.root}>
            <div> ID: {car.id}</div>
            <div>BRAND: {car.brand}</div>
            <div>PRICE: {car.price}</div>
            <div> YEAR: {car.year}</div>
            <button style={{backgroundColor: '#7BAADD'}} onClick={() => setSelectedCar(car)}>UPDATE</button>
            <button style={{backgroundColor: '#FF0000'}} onClick={() => deleteCar(car.id)}>DELETE</button>
        </div>
    );
};

export default Car;