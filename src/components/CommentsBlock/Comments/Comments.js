import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {commentsService} from '../../../services/comments.service';
import style from './Comment.module.css'
import CommentForm from './CommentForm';
import Comment from './Comment'
import {commentsActions} from '../../../redux';

const Comments = () => {
    const {comments} = useSelector(state => state.comments)

    const dispatch = useDispatch()

    useEffect(() => {
        commentsService.getAll().then(value => dispatch(commentsActions.setAll(value.data.filter(item => item.id < 10))))
    }, [dispatch])

    return (
        <div className={style.container}>
            <CommentForm/>
            {
                comments.map((comment) => <Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;