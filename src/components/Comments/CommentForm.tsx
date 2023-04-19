import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {IComment} from "../../interfaces/comment.interface";
import {IUseState} from "../../types/useState.type";
import {commentService} from "../../services/comment.service";


interface IProps {
    setComments: IUseState<IComment[]>
}

const CommentForm: FC<IProps> = ({setComments}) => {
    const {register, handleSubmit, reset} = useForm<IComment>()

    const save: SubmitHandler<IComment> = async (comment) => {
        const {data} = await commentService.create(comment)
        setComments((prev) => [...prev, data])
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

export default CommentForm;