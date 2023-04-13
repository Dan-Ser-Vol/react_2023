import React from 'react';
import style from './Users.module.css'

const Posts = ({post}) => {
    return (
        <div className={style.item}>
            <div> user id: {post.userId}</div>
            <h3>TITLE: {post.title}</h3>
            <div>BODY: {post.body}</div>
        </div>
    );
};

export default Posts;