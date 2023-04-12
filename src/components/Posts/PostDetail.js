import React from 'react';
import style from './Post.module.css'

const PostDetail = ({postInfo}) => {
    return (
        <div className={style.itemDetail}>
            <h2>TITLE: {postInfo.title}</h2>
            <div>ID: {postInfo.id}</div>
            <div>USER ID: {postInfo.userId}</div>
            <div> Body: {postInfo.body}</div>
        </div>
    );
};

export default PostDetail;