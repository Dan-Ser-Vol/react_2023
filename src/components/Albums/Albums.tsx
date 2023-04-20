import React, {useEffect, useState} from 'react';
import {todoService} from "../../services/todos.service";
import {IAlbum} from "../../interfaces/album.interface";
import Album from "./Album";

const Albums = () => {

    const [albums, setAlbums ] = useState<IAlbum[]>([])

    useEffect(() => {
        const fetchAlbums = async () => {
            const { data } = await todoService.getAll();
            setAlbums(data);
        };
        fetchAlbums();
    }, []);

    return (
        <div>
            {
                albums.map(album=> <Album key={ album.id } album={album}/>)
            }
        </div>
    );
};

export default Albums;