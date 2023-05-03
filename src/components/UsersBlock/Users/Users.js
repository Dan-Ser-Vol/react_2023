import React, {useEffect} from 'react';
import UserForm from '../UserForm/UserForm';
import {useDispatch, useSelector} from 'react-redux';

import style from './Users.module.css'
import {userService} from '../../../services/users.service';
import {User} from '../User/User';
import {usersActions} from '../../../redux';


const Users = () => {
    const {users} = useSelector(state=>state.users)
    const dispatch = useDispatch()

    useEffect(()=>{
        userService.getAll().then(value=> dispatch(usersActions.setAll(value.data)))
    }, [dispatch])


    return (
        <div className={style.container}>
            <UserForm/>
            {
                users.map((user) => <User  key={user.id} user={user}/>)
            }
        </div>
    );
};
export {Users}