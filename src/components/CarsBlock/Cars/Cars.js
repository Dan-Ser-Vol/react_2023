import React, {useEffect, useState} from 'react';
import {carService} from '../../../services/car.service';
import Car from '../Car/Car';
import CarForm from '../CarForm/CarForm';
import {toast} from 'react-toastify';


const Cars = () => {
    const [cars, setCars] = useState([])
    const [allCars, setAllCars] = useState(null)
    const [selectedCar, setSelectedCar] = useState(null)

    useEffect(() => {
        carService.getAll()
            .then((value) => setCars(value.data.reverse()))
    }, [allCars])

    const notifyWarn = () => toast.warn('Авто було видалене!',
        {
            position: 'top-center',
            autoClose: 2000,
        }
    )

    const deleteCar = async (id) => {
        try {
            await carService.deleteById(id);
            setAllCars((prev) => !prev);
            notifyWarn()
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <CarForm
                setAllCars={setAllCars}
                selectedCar={selectedCar}
                setSelectedCar={setSelectedCar}
            />
            {
                cars.map((car) => <Car
                    key={car.id}
                    car={car}
                    setSelectedCar={setSelectedCar}
                    deleteCar={deleteCar}

                />)
            }
        </div>
    );
};

export default Cars;