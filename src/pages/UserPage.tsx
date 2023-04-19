import React, {FC, useEffect, useState} from 'react';
import UserForm from "../components/Users/UserForm";

import {IUser} from "../interfaces/user.interface";
import Users from "../components/Users/Users";
import {userService} from "../services/user.service";


interface IProps {}

const UserPage:FC<IProps> = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(()=>{
        userService.getAll().then(value=>setUsers(value.data))
    },[])

    return (
        <div className={'container'}>
            <UserForm setUsers={setUsers}/>
            <Users users={users}/>
        </div>
    );
};

export default UserPage;
