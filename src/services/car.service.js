import {instanceCar} from './axios.services';
import {urls} from '../configs/urls';


const carService = {
    getAll: () => instanceCar.get(urls.cars),
    getById: (id) => instanceCar.get(`${urls.cars}/${id}`),
    updateById: (id, car) => instanceCar.put(`${urls.cars}/${id}`, car),
    create: (car) => instanceCar.post(urls.cars, car),
    deleteById: (id) => instanceCar.delete(`${urls.cars}/${id}`)
}


export {
    carService
}