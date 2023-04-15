import React, {useEffect, useState} from 'react';
import UserForm from '../UserForm/UserForm';
import style from './Users.module.css'
import {userService} from '../../../services/users.service';
import User from '../User/User';

const Users = () => {
    const [users, setUsers]= useState([])
    console.log(users)
    useEffect(()=>{
        userService.getAll().then(value=>setUsers(value.data))

    }, [])

    const addUser = (user) => {
        setUsers([...users, user])
    }
    return (
        <div className={style.container}>
            <UserForm addUser={addUser}/>
            {
                users.map((user) => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;