import {instanceUsers} from './axios.services';
import {urls} from '../configs/urls';


const userService = {
    getAll: () => instanceUsers.get(urls.users),
    getById: (id) => instanceUsers.get(`${urls.users}/${id}`),
    updateById: (id, user) => instanceUsers.put(`${urls.users}/${id}`, user),
    create: (user) => instanceUsers.post(urls.users, user),
    deleteById: (id) => instanceUsers.delete(`${urls.users}/${id}`)
}


export {
    userService
}