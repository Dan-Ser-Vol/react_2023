import React, {useEffect} from 'react';
import {toast} from 'react-toastify';
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
        <div>
            <CarForm
                carForUpdate={carForUpdate}
            />
            {
                cars.map((car) => <Car
                    key={car.id}
                    car={car}
                    deleteCar={deleteCar}

                />)
            }
        </div>
    );
};

export default Cars;