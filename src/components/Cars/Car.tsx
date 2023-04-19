import React, {FC} from 'react';

import {ICar} from "../../interfaces/car.interface";
import {IUseState} from "../../types/useState.type";
import {carService} from "../../services/car.service";

interface IProps {
    car: ICar
    setCarForUpdate: IUseState<ICar | null>
    setOnChange: IUseState<boolean>
}


const Car: FC<IProps> = ({car, setCarForUpdate, setOnChange}) => {

    const deleteCar = async () => {
        await carService.deleteById(car.id)
        setOnChange(prev => !prev)
    }

    return (
        <div className={'item'}>
           <div className={'info_block'}>
               <div><span>ID:</span>{car.id}</div>
               <div><span>BRAND:</span>{car.brand}</div>
               <div><span>PRICE:</span>{car.price}</div>
               <div><span>YEAR:</span>{car.year}</div>
           </div>
            <div className={'button_block'}>
                <button onClick={() => setCarForUpdate(car)}>UPDATE</button>
                <button onClick={deleteCar}>DELETE</button>
            </div>
        </div>
    );
};

export default Car;