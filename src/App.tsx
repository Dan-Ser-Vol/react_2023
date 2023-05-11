import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Header} from "./components";
import {CarPage, CommentPage, HomePage, LoginPage, RegisterPage, UserPage} from "./pages";
import {MainLayout} from "./Layouts";
import './App.css';


function App() {

    return (
        <div>
            <div><Header/></div>
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
