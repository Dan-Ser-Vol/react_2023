import React, { useState} from 'react';
import style from './Post.module.css'
import PostDetail from './PostDetail';

const PostItem = ({post}) => {
    const [postDetail, setPostDetail] = useState(null)

    const getPost = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + post.id)
            .then((res) => res.json())
            .then((data) => setPostDetail({...data}))
    }


    return (
        <div className={style.item}>
            {
                postDetail ? (<PostDetail postInfo={postDetail}/>) :
                    <>
                        <h2>ID:{post.id} TITLE: {post.title}</h2>
                        <button className={style.detailButton}
                                onClick={getPost}
                        >DETAIL
                        </button>
                    </>

            }

        </div>
    );
};

export default PostItem;