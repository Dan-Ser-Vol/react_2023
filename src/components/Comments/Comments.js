import React, {Component} from 'react';

import {commentsService} from '../../services/comments.service';
import Comment from './Comment';


class Comments extends Component {
    constructor(props) {
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