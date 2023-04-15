import {instanceComments, instanceUsers} from './axios.services';
import {urls} from '../configs/urls';


const userService = {
    getAll: () => instanceComments.get(urls.comments),
    getById: (id) => instanceComments.get(`${urls.comments}/${id}`),
    updateById: (id, comment) => instanceComments.put(`${urls.comments}/${id}`, comment),
    create: (comment) => instanceComments.post(urls.comments, comment),
    deleteById: (id) => instanceComments.delete(`${urls.comments}/${id}`)
}


export {
    userService
}