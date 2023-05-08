import React, {FC} from 'react';

import {useNavigate} from "react-router-dom";


const Header:FC = () => {
    const navigate = useNavigate()
    return (
        <div className={'header'}>
            <button onClick={()=>navigate('/')} >Home</button>
            <button onClick={()=>navigate('users')} >Users</button>
            <button onClick={()=>navigate('comments')}>Comments</button>
            <button onClick={()=>navigate('cars')}>Cars</button>
        </div>
    );
};

export {Header};