import React, {useEffect, useState} from 'react';

import {IComment} from "../interfaces/comment.interface";
import {commentService} from "../services/comment.service";
import Comments from "../components/Comments/Commenst";
import CommentForm from "../components/Comments/CommentForm";

const CommentPage = () => {

    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        commentService.getAll().then(value => setComments(value.data.filter(item => item.id <= 10)))
    }, [])

    return (
        <div className={'container'}>
            <CommentForm setComments={setComments}/>
            <Comments comments={comments}/>
        </div>
    );
};

export default CommentPage;
