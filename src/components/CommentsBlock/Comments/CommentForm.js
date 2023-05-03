import React, {useState} from 'react';
import {joiResolver} from '@hookform/resolvers/joi';
import {toast} from 'react-toastify';
import {useForm} from 'react-hook-form';

import Comment from './Comment';
import {commentsService} from '../../../services/comments.service';
import style from "./Comment.module.css"
import {commentsValidator} from '../../../validators/commens.validator';

const CommentForm = () => {
    const [comment, setComment] = useState(null)
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({mode: 'all', resolver: joiResolver(commentsValidator)})


    const notifySuccess = (message) => toast.success(message,
        {
            position: 'top-center',
            autoClose: 1500,
        }
    )


    const createComment = async (commentData) => {
        try {
            const {data} = await commentsService.create(commentData)
            console.log(data)
            setComment(data)
            reset()
            notifySuccess('Коментар створено')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <form className={style.formBlock} onSubmit={handleSubmit(createComment)}>
                <div>
                </div>
                <label>
                    <input placeholder={'Enter name'} {...register("name")} />
                </label>
                {errors.name && <div className={style.error_block}>{errors.name.message}</div>}
                <label>
                    <input  placeholder={'Enter email'} type={'email'} {...register("email")} />
                </label>
                {errors.email && <div className={style.error_block}>{errors.email.message}</div>}
                <label>
                    <textarea  placeholder={'Enter body'}  {...register("body")} />
                </label>
                {errors.body && <div className={style.error_block}>{errors.body.message}</div>}
                <button >CREATE</button>
            </form>
            {
                comment && <Comment comment={comment}/>
            }
        </>

    );
};

export default CommentForm;