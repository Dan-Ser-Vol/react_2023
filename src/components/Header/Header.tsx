import React, {FC, useEffect} from 'react';

import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {authService} from "../../services";
import {authActions} from "../../redux";


const Header: FC = () => {
    const {me} = useAppSelector(state => state.authReducer) ?? {}
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (!me && authService.getAccessToken()) {
            dispatch(authActions.me())
        }
    }, [dispatch, me]);


    const navigate = useNavigate()
    return (
        <div className={'header'}>

            {
                me ? <>
                        <div>{me.username}</div>
                        <button onClick={() => navigate('/home')}>Home</button>
                        <button onClick={() => navigate('users')}>Users</button>
                        <button onClick={() => navigate('comments')}>Comments</button>
                        <button onClick={() => navigate('cars')}>Cars</button>
                    </>
                    :
                    <>
                        <button onClick={() => navigate('/register')}>Register</button>
                        <button onClick={() => navigate('/Login')}>Login</button>
                    </>
            }


        </div>
    );
};

export {Header};