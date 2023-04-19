import React, {FC} from 'react';
import {IUser} from "../../interfaces/user.interface";

interface IProps {
    user: IUser
}

const User: FC<IProps> = ({user}) => {
    return (
        <div className={'item'}>
            <div><span>ID: </span>{user.id}</div>
            <div><span>NAME: </span>{user.name}</div>
            <div><span>EMAIL: </span>{user.email}</div>
        </div>
    );
};

export default User;