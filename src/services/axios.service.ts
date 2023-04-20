import axios from "axios";
import { PlaceBaseURL} from "../configs/urls";

const placeAxiosService = axios.create({baseURL: PlaceBaseURL})


export {
    placeAxiosService,
}