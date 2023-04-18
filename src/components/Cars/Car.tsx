import React, {FC} from 'react';
import {ICar} from "../../interfaces/interface";

interface IProps {
    car:ICar
}

const Car:FC<IProps> = ({car}) => {


    return (
        <div>
            <div>{car.id}</div>
            <div>{car.brand}</div>
            <div>{car.price}</div>
            <div>{car.year}</div>
        </div>
    );
};

export default Car;