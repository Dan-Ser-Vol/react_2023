import React, {FC} from 'react';
import {Outlet} from "react-router-dom"

import Navbar from "../Navbar/Navbar";


const Layout:FC = () => {

    return (
        <div>
            <div>
                <Navbar/>
            </div>
          <Outlet />
        </div>
    );
};

export default Layout;