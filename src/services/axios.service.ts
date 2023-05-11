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

axiosService.interceptors.response.use(res => {
        return res
    },
    async (error) => {
        const originalRequest = error.config
        if (error.response.status === 401 && error.config && !error.config._isRefreshing) {
            error.config._isRefreshing= true
            try {
                await authService.refresh()
                return axiosService(originalRequest)
            } catch (e) {
                authService.deleteTokens()
                return Promise.reject(error)
            }
        }
        return Promise.reject(error)
    }
)

export {
    placeAxiosService,
    axiosService,
}