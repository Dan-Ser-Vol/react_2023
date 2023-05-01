import {placeBaseURL} from "../configs/urls";
import axios from "axios";

const axiosService = axios.create({baseURL: placeBaseURL})


export {
    axiosService
}