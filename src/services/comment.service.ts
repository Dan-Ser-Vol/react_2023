import {urls} from "../configs";
import {IRes} from "../types";
import {placeAxiosService} from "./axios.service";
import {IComment} from "../interfaces";


const commentService = {
    getAll: ():IRes <IComment[]> => placeAxiosService.get(urls.placeAPI.comments),
    create: (comment:IComment):IRes<IComment> => placeAxiosService.post(urls.placeAPI.comments, comment),
}

export {
    commentService
}