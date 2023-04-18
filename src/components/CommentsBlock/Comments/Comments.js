import React, {useState, useEffect} from 'react';
import {commentsService} from '../../../services/comments.service';
import style from './Comment.module.css'
import CommentForm from './CommentForm';
import Comment from './Comment'

const Comments = () => {

    const [comments, setComments] = useState([])
    useEffect(() => {
        commentsService.getAll().then(value => setComments(value.data.filter(item => item.id < 10)))
    }, [])

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