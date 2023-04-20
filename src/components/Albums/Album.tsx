import React, {FC} from 'react';
import {IAlbum} from "../../interfaces/album.interface";

interface IProps {
    album: IAlbum
}

const Album:FC<IProps> = ({album}) => {
    return (
        <div className={'item'}>
            <div><span>User ID:</span>{album.userId}</div>
            <div><span>ID:</span>{album.id}</div>
            <div><span>Title:</span>{album.title}</div>
        </div>
    );
};

export default Album;