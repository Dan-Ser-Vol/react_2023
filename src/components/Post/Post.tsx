import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPost} from "../../interfaces/post.interface";
import {postsService} from "../../services/posts.service";




interface IProps {
}


const Post: FC<IProps> = () => {
    const [post, setPost] = useState<IPost| null >(null)

    const {postId} = useParams()

    useEffect(()=>{
        const fetchPost = async () => {
            const {data} = await postsService.getById( postId )
            setPost(data)
        }
        fetchPost()
    }, [postId])

    return (
        <div className={'item'}>
            post title {post?.title}
            <div><span>User ID:</span>{post?.userId}</div>
            <div><span>ID:</span>{post?.id}</div>
            <div><span>Title:</span>{post?.title}</div>
            <div><span>Body:</span>{post?.body}</div>
        </div>
    );
};

export default Post;