import React from 'react';
import {Route, Routes} from "react-router-dom";

import {Header} from "./components";
import {CarPage, CommentPage, HomePage, UserPage} from "./pages";
import {MainLayout} from "./Layouts";
import './App.css';


function App() {
    return (
        <div>
            <div><Header/></div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index path={'/'} element={<HomePage/>}/>
                    <Route path={'users'} element={<UserPage/>}/>
                    <Route path={'comments'} element={<CommentPage/>}/>
                    <Route path={'cars'} element={<CarPage/>}/>
                </Route>
            </Routes>
        </div>
    )
}
export default App;
