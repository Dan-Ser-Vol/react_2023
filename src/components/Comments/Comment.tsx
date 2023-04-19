import React, {FC} from 'react';

import {IComment} from "../../interfaces/comment.interface";


interface IProps {
    comment: IComment
}

const Comment:FC<IProps> = ({comment}) => {
    return (
        <div className={'item_comment'}>
            <div><span>ID:</span> {comment.id}</div>
            <div><span>NAME:</span>{comment.name}</div>
            <div><span>EMAIL:</span>{comment.email}</div>
            <div><span>BODY:</span>{comment.body}</div>
        </div>
    );
};

export default Comment;