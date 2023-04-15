import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import style from './UserForm.module.css'
import {toast} from 'react-toastify';
import {userService} from '../../../services/users.service';
import User from '../User/User';
import {userValidator} from '../../../validators/user.validator';



const UsersForm = () => {
    const [user, setUser] = useState(null)
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({mode: 'all', resolver: joiResolver(userValidator)})


    const notifySuccess = (message) => toast.success(message,
        {
            position: 'top-center',
            autoClose: 1500,
        }
    )


    const createNewUser = async (userData) => {
        try {
            const {data} = await userService.create(userData)
            setUser(data)
            reset()
            notifySuccess('Користувача створено')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(createNewUser)}>
             <div>
             </div>
                <label>
                    <input placeholder={'Enter name'} {...register("name")} />
                </label>
                {errors.name && <div className={style.error_block}>{errors.name.message}</div>}
                <label>
                    <input  placeholder={'Enter username'} {...register("username")} />
                </label>
                {errors.username && <div className={style.error_block}>{errors.username.message}</div>}
                <label>
                    <input  placeholder={'Enter email'} type={'email'} {...register("email")} />
                </label>
                {errors.email && <div className={style.error_block}>{errors.email.message}</div>}
                <label>
                    <input  placeholder={'Enter phone number'} type="tel" {...register("phone")} />
                </label>
                {errors.phone && <div className={style.error_block}>{errors.phone.message}</div>}
                <label>
                    <input  placeholder={'Enter website'}  {...register("website")} />
                </label>
                {errors.website && <div className={style.error_block}>{errors.website.message}</div>}
                <button>CREATE</button>
            </form>
            {
                user && <User user={user}/>
            }
        </>

    );
};

export default UsersForm;