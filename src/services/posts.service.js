import {axiosService} from './axios.service';

import {urls} from '../configs/urls';

const postsService = {
    getAll: ()  => axiosService.get(`${urls.posts}`)
}

export {
    postsService
}