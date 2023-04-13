import React, {useState} from 'react';
import style from './Users.module.css'
import Posts from './Posts';

const UserItem = ({user}) => {
    const [posts, setPosts] = useState([])

    const getPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then((res) => res.json())
            .then((data) => setPosts([...data]))
    }
    return (
        <div>
            <div className={style.item}>
                <h2>NAME - {user.name}</h2>
                <div>SURNAME - {user.username}</div>
                <div>EMAIL - {user.email}</div>
                <div>ADDRESS:</div>
                <div>STREET - {user.address.street}</div>
                <div>SUITE - {user.address.suite}</div>
                <div>CITY - {user.address.city}</div>
                <div>ZIP CODE - {user.address.zipcode}</div>
                <div>GEO:</div>
                <div>LAT {user.address.geo.lat}</div>
                <div>LNG {user.address.geo.lng}</div>
                <div>COMPANY:</div>
                <div>BS - {user.company.bs}</div>
                <div>CATCH PHRASE - {user.company.catchPhrase}</div>
                <div>CATCH PHRASE - {user.company.catchPhrase}</div>
                <div>COMPANY NAME - {user.company.name}</div>
            </div>

            {
                posts.length === 0 &&  <button className={style.detailButton} onClick={getPosts}>SHOW POSTS</button>
            }

            {
                posts ?
                    posts.map(userPost => (<Posts key={userPost.id} post={userPost}/>))
                    : 'Постів немає!'
            }
        </div>
    );
};

export default UserItem;