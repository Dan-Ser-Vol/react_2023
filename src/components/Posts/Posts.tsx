import React, {Component} from "react";

import Post from "./Post";
import {IPost} from "../../interfaces/post.interfaces";
import {postsService} from "../../services/posts.service";

interface IProps {}

interface IState {
    posts: IPost[];
}

class Posts extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        postsService.getAll().then(value => {
            this.setState({posts: value.data});
        });
    }

    render() {
        return <>
            <div>
                {this.state.posts.map((post) => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        </>
    }
}

export default Posts;