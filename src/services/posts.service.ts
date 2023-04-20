import {urls} from "../configs/urls";
import {IRes} from "../types/res.type";
import {placeAxiosService} from "./axios.service";
import {IPost} from "../interfaces/post.interface";


const postsService = {
    getAll: (): IRes<IPost[]> => placeAxiosService.get(urls.placeAPI.posts),
  getById: (postId: string | undefined):IRes<IPost> =>  placeAxiosService.get(urls.placeAPI.getPostById(postId)),
}

export {
    postsService
}