import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IComment} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {commentActions} from "../../redux";


const CommentForm: FC = () => {
    const {register, handleSubmit, reset} = useForm<IComment>()

    const dispatch = useAppDispatch()

    const save: SubmitHandler<IComment> = async (comment) => {
         await dispatch(commentActions.create({comment}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'enter name'} {...register('name')}/>
            <input type="text" placeholder={'enter email'} {...register('email')}/>
            <input type='text' placeholder={'enter body'} {...register('body')}/>
            <button>SAVE</button>
        </form>
    );
};

export  {CommentForm};