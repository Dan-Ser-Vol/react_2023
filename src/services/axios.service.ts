import axios from "axios";
import {carBaseURL, PlaceBaseURL} from "../configs";


const placeAxiosService = axios.create({baseURL: PlaceBaseURL})
const carsAxiosService = axios.create({baseURL: carBaseURL})


export {
    placeAxiosService,
    carsAxiosService
}