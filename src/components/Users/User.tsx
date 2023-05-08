import React, {FC} from 'react';
import {IUser} from "../../interfaces";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    const {id, name, email} = user

    return (
        <div className={'item'}>
            <div><span>ID: </span><span style={{color: 'darkblue'}}>{id}</span></div>
            <div><span>NAME: </span><span style={{color: 'darkblue'}}>{name}</span></div>
            <div><span>EMAIL: </span><span style={{color: 'darkblue'}}>{email}</span></div>
        </div>
    );
};

export {User};