import {urls} from "../configs/urls";
import {IRes} from "../types/res.type";
import {placeAxiosService} from "./axios.service";
import {ITodo} from "../interfaces/todo.interface";


const todoService = {
    getAll: (): IRes<ITodo[]> => placeAxiosService.get(urls.placeAPI.todos),
    create: (todo: ITodo): IRes<ITodo> => placeAxiosService.post(urls.placeAPI.todos, todo),
}

export {
    todoService
}