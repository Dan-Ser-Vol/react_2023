import React, {FC, useEffect} from 'react';
import {Comment} from "./Comment";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {commentActions} from "../../redux";


const Comments: FC = () => {

    const {comments} = useAppSelector(state => state.commentReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(commentActions.getAll())
    }, [dispatch])
    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export  {Comments};