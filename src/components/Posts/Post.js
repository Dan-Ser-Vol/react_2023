import {Component} from 'react';


class Post extends Component {
    render() {
        const { id, userId, title, body} = this.props.post
        return (
            <>
                <div className={'item'}>
                    <div><span>UserId:</span>{userId}</div>
                    <div><span>ID:</span>{id}</div>
                    <div><span>Body:</span>{title}</div>
                    <div><span>Body:</span>{body}</div>
                </div>
            </>
        );
    }
}

export default Post