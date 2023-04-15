import React from 'react';
import {Link} from 'react-router-dom';
import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={style.root}>
            <Link to={'/users'}>Users</Link>
            <Link to={'/comments'}>Comments</Link>
            <Link to={'/cars'}>Cars</Link>
        </div>
    );
};

export default Navbar;