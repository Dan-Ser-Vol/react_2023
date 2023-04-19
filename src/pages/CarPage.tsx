import React, {useEffect, useState} from 'react';

import {ICar} from "../interfaces/car.interface";
import CarForm from "../components/Cars/CarForm";
import Cars from "../components/Cars/Cars";
import {carService} from "../services/car.service";


const CarPage = () => {
    const [cars, setCars] = useState<ICar[]>([])
    const [onChange, setOnChange] = useState<boolean>(false)
    const [carForUpdate, setCarForUpdate] = useState<ICar | null>(null)

    useEffect(() => {
        carService.getAll().then(value => setCars(value.data))
    }, [onChange])

    return (
        <div className={'container'}>
            <CarForm
                setOnChange={setOnChange}
                carForUpdate={carForUpdate}
                setCarForUpdate={setCarForUpdate}/>
            <Cars
                cars={cars}
                setCarForUpdate={setCarForUpdate}
                setOnChange={setOnChange}
            />
        </div>
    );
};

export default CarPage;
