import React, {useState, useEffect} from 'react';
import PostItem from './PostItem';
import style from './Post.module.css'

const PostsList = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((data) => setPosts([...data]))
    }, [

    ])
    return (
        <div className={style.container}>
            {
                posts.map(post=>(<PostItem key={post.id} post={post}/>))
            }
        </div>
    );
};

export default PostsList;