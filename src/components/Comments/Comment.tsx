import {Component, useState} from "react";
import {IComment} from "../../interfaces/comment.interfaces";

interface IProp {
    comment: IComment
}


class Comment extends Component<IProp> {
    render() {
        const {name, id, email, body, postId} = this.props.comment
        return (
            <>
                <div className={'item'}>
                    <div><span>Name:</span>{name}</div>
                    <div><span>ID:</span>{id}</div>
                    <div><span>Post ID:</span>{postId}</div>
                    <div><span>Body:</span>{body}</div>
                    <div><span>Email:</span>{email}</div>
                </div>
            </>
        );
    }
}

export default Comment