import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link  className={'link_navbar'} to={"posts"}>Posts</Link>
            <Link  className={'link_navbar'} to={'animals'}>Animals</Link>
            <Link  className={'link_navbar'} to={"comments"}>Comments</Link>
        </div>
    );
};

export default Navbar;