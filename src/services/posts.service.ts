import {axiosService} from "./axios.service";

import {urls} from "../configs/urls";
import {IRes} from "../types/res.type";
import {IPost} from "../interfaces/post.interfaces";

const postsService = {
    getAll: ():IRes<IPost[]> => axiosService.get(`${urls.posts}`)
}

export {
    postsService
}