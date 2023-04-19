
import {ICar} from "../interfaces/car.interface";
import {urls} from "../configs/urls";
import {IRes} from "../types/res.type";
import {carsAxiosService} from "./axios.service";


const carService = {
    getAll: ():IRes<ICar[]> => carsAxiosService.get(urls.carsAPI.cars),
    create: (car:ICar):IRes<ICar> => carsAxiosService.post(urls.carsAPI.cars, car),
    updateById: ( id:number, car:ICar):IRes<ICar> => carsAxiosService.put(urls.carsAPI.byId(id), car),
    deleteById: ( id:number):IRes<void> => carsAxiosService.delete(urls.carsAPI.byId(id)),
}

export {
    carService
}