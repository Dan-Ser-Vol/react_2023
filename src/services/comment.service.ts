import {urls} from "../configs/urls";
import {IRes} from "../types/res.type";
import {placeAxiosService} from "./axios.service";
import {IComment} from "../interfaces/comment.interface";


const commentService = {
    getAll: ():IRes <IComment[]> => placeAxiosService.get(urls.placeAPI.comments),
    create: (comment:IComment):IRes<IComment> => placeAxiosService.post(urls.placeAPI.comments, comment),
}

export {
    commentService
}