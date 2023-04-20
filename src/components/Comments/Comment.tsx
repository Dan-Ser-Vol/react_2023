import React, {FC} from 'react';
import {Outlet, useNavigate} from "react-router-dom"

import {IComment} from "../../interfaces/comment.interface";


interface IProps {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, postId, name, body, email} = comment

    const navigate = useNavigate()

    return (
        <>
            <div className={'item'}>
                <div><span>Name:</span>{name}</div>
                <div><span>ID:</span>{id}</div>
                <div><span>Post ID:</span>{postId}</div>
                <div><span>Body:</span>{body}</div>
                <div><span>Email:</span>{email}</div>
            </div>
            <button onClick={() => navigate(`${postId}`)}>Post Detail</button>
            <Outlet/>
        </>
    );
};

export default Comment;