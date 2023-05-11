import {ICar, IPagination} from "../interfaces";
import {urls} from "../configs";
import {IRes} from "../types";
import {axiosService} from "./axios.service";


class CarService {
    getAll(): IRes<IPagination<ICar>> {
        return axiosService.get(urls.carsAPI.cars)
    }

    create(car: ICar): IRes<ICar> {
        return axiosService.post(urls.carsAPI.cars, car)
    }

    updateById(id: number, car: ICar): IRes<ICar> {
        return axiosService.put(urls.carsAPI.byId(id), car)
    }

    deleteById(id: number): IRes<void> {
        return axiosService.delete(urls.carsAPI.byId(id))
    }
}

export const carService = new CarService()

