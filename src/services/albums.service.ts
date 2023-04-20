import {urls} from "../configs/urls";
import {IRes} from "../types/res.type";
import {placeAxiosService} from "./axios.service";
import {IAlbum} from "../interfaces/album.interface";


const albumService = {
    getAll: (): IRes<IAlbum[]> => placeAxiosService.get(urls.placeAPI.albums),
    create: (album: IAlbum): IRes<IAlbum> => placeAxiosService.post(urls.placeAPI.albums, album),
}

export {
    albumService
}