import {axiosService} from "./axios.service";
import {urls} from "../configs";
import {IAuth, ITokens, IUser} from "../interfaces";
import {IRes} from "../types";
import {AxiosResponse} from "axios";


class AuthService {
    private readonly accessKey = 'access'
    private readonly refreshKey = 'refresh'

    register(user: IAuth): IRes<IUser> {
        return axiosService.post(urls.authAPI.register, user)
    }

    async login(user: IAuth): Promise<IUser> {
        const {data}: AxiosResponse<ITokens> = await axiosService.post(urls.authAPI.login, user)
        this.setTokens(data)
        const {data:me}:AxiosResponse<IUser> = await this.me()
        return me
    }

   me ():IRes<IUser> {
        return axiosService.get(urls.authAPI.me)
    }

    async refresh(): Promise<void> {
        try {
            const refreshToken = this.getRefreshToken();
            if (!refreshToken) {
                throw new Error("Refresh token doesn't exist!");
            }

            const { data }: AxiosResponse<ITokens> = await axiosService.post(
                urls.authAPI.refresh,
                { refresh: refreshToken }
            );

            this.setTokens(data);
        } catch (error) {
            console.error(error);
        }
    }


    private setTokens({access, refresh}: ITokens): void {
        localStorage.setItem(this.accessKey, access)
        localStorage.setItem(this.refreshKey, refresh)
    }

    getAccessToken(): string {
        return localStorage.getItem(this.accessKey)
    }

    getRefreshToken(): string {
        return localStorage.getItem(this.refreshKey)
    }

    deleteTokens(): void {
        localStorage.removeItem(this.accessKey)
        localStorage.removeItem(this.refreshKey)
    }
}

export const authService = new AuthService()