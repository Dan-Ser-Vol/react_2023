import axios from "axios";
import {carBaseURL, PlaceBaseURL} from "../configs";
import {authService} from "./auth.service";


const placeAxiosService = axios.create({baseURL: PlaceBaseURL})
const axiosService = axios.create({baseURL: carBaseURL})


axiosService.interceptors.request.use(res => {
    const access = authService.getAccessToken()
    if (access) {
        res.headers.Authorization = `Bearer ${access}`
    }
    return res
})


export {
    placeAxiosService,
    axiosService,
}