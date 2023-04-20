import React from 'react';
import {Link} from "react-router-dom"

const Navbar = () => {
    return (
        <div className={'navbar'}>
            <Link  className={'link_navbar'} to={"todos"}>Todos</Link>
            <Link  className={'link_navbar'} to={'albums'}>Albums</Link>
            <Link  className={'link_navbar'} to={"comments"}>Comments</Link>
        </div>
    );
};

export default Navbar;