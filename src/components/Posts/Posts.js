import React, {Component} from "react";

import Post from "./Post";
import {postsService} from "../../services/posts.service";



class Posts extends Component {
    constructor(props) {
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