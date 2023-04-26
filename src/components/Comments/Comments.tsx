import React, {Component} from "react";

import {IComment} from "../../interfaces/comment.interfaces";
import {commentsService} from "../../services/comments.service";
import Comment from "./Comment";

interface IProps {}

interface IState {
    comments: IComment[];
}

class Comments extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            comments: []
        }
    }

    componentDidMount() {
        commentsService.getAll().then(value => {
            this.setState({comments: value.data});
        });
    }

    render() {
        return <>
            <div>
                {this.state.comments.map((comment) => (
                    <Comment key={comment.id} comment={comment}/>
                ))}
            </div>
        </>
    }
}

export default Comments;