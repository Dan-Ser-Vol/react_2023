import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Header} from "./components";
import {CarPage, CommentPage, HomePage, LoginPage, RegisterPage, UserPage} from "./pages";
import {MainLayout} from "./Layouts";
import './App.css';
import {useAppSelector} from "./hooks";


function App() {

    const {me} = useAppSelector(state => state.authReducer)

    return (
        <div>
            <div><Header/></div>
            {
                !me && <>
                    <h1 style={{textAlign:'center', color:'green', marginTop: '100px'}}>
                        Select "Register" or "Login" if you have already registered before
                    </h1>
                </>
            }
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'login'} element={<LoginPage/>}/>
                    <Route path={'register'} element={<RegisterPage/>}/>
                    <Route path={'users'} element={<UserPage/>}/>
                    <Route path={'comments'} element={<CommentPage/>}/>
                    <Route path={'cars'} element={<CarPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App;
