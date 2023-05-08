import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IUser} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {userActions} from "../../redux";


const UserForm: FC = () => {
    const {register, handleSubmit, reset} = useForm<IUser>()
    const  dispatch = useAppDispatch()

    const save: SubmitHandler<IUser> = async (user) => {
        dispatch(userActions.create({user}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'email'} {...register('email')}/>
            <button>SAVE</button>
        </form>
    );
};

export default UserForm;