import React, {useState} from 'react';
import style from './Navbar.module.css'
import SpaceXList from '../SpaceX/SpaceXList';
import PostsList from '../Posts/PostsList';

const Navbar = () => {
    const [state, setState] = useState('')
    return (
        <div >
        <div className={style.headerBlock}>
            <button className={style.detailButton} onClick={() => setState('posts')}>POSTS</button>
            <button className={style.detailButton} onClick={() => setState('space')}>SPACEX</button>
        </div>
            {
                state === 'posts' ?
                    <PostsList/>
                    :
                    <SpaceXList/>
            }
        </div>
    );
};

export default Navbar;