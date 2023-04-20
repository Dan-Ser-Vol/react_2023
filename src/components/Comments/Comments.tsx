import React, {useEffect, useState} from 'react';
import {IComment} from "../../interfaces/comment.interface";
import {commentService} from "../../services/comment.service";
import Comment from "./Comment";

const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(()=>{
        const fetchComments = async () => {
            const {data} = await commentService.getAll()
            setComments(data)
        }
        fetchComments()
    }, [])
    return (
        <div>
            {
                comments.map(comment=> <Comment key={ comment.id } comment={comment}/>)
            }
        </div>
    );
};

export default Comments;