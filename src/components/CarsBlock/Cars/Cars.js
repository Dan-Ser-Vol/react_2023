import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {carService} from '../../../services/car.service';
import Car from '../Car/Car';
import CarForm from '../CarForm/CarForm';
import {carsActions} from '../../../redux';


const Cars = () => {
    const {cars, carForUpdate, trigger} = useSelector(state =>state.cars)
    const dispatch = useDispatch()

    useEffect(() => {
        carService.getAll()
            .then((value) => dispatch(carsActions.setCars(value.data.reverse())))
    }, [dispatch, carForUpdate, trigger])


    return (
        <div>
            <CarForm/>{
                cars.map((car) => <Car
                    key={car.id}
                    car={car}
                />)
            }
        </div>
    );
};

export default Cars;