import React from 'react';

const Posts = ({post}) => {
    return (
        <div>
            <div> user id: {post.userId}</div>
            <h3>TITLE: {post.title}</h3>
            <div>BODY: {post.body}</div>
        </div>
    );
};

export default Posts;