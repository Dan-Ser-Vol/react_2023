import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";
import {IRes} from "../types/res.type";
import {IComment} from "../interfaces/comment.interfaces";

const commentsService = {
    getAll: (): IRes<IComment[]> => axiosService.get(`${urls.comments}`)
}


export {
    commentsService
}