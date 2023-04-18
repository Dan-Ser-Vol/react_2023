import React from 'react';
import style from '../../UsersBlock/User/User.module.css';

const Comment = ({comment}) => {
    return (
        <div className={style.block}>
            <h2><span  className={style.span}>Name:</span>{comment.name}</h2>
            <div><span  className={style.span}>ID:</span> {comment.id}</div>
            <div><span  className={style.span}>Email:</span> {comment.email}</div>
            <div> <span  className={style.span}>Body:</span>{comment.body}</div>
        </div>
    );
};

export default Comment;