import React, {FC} from 'react';

import {ICar} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {carActions} from "../../redux";

interface IProps {
    car: ICar
}

const Car: FC<IProps> = ({car}) => {
    const {id, brand, price, year} = car
    const dispatch = useAppDispatch()

    const deleteCar = async () => {
        await dispatch(carActions.deleteCar({id}))
    }

    const updateCar = async () => {
        await dispatch(carActions.setCarForUpdate(car))
    }

    return (
        <div className={'item'}>
            <div className={'info_block'}>
                <div><span>ID:</span>
                    <span className={'span_dark'}> {id}</span>
                </div>
                <div><span>BRAND:</span> <span className={'span_dark'}> {brand}</span></div>
                <div><span>PRICE:</span> <span className={'span_dark'}> {price}</span></div>
                <div><span>YEAR:</span> <span className={'span_dark'}> {year}</span></div>
            </div>
            <div className={'button_block'}>
                <button onClick={updateCar}>UPDATE</button>
                <button style={{color: 'red'}} onClick={deleteCar}>DELETE</button>
            </div>
        </div>
    );
};

export {Car};