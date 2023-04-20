import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom"

import Albums from "./components/Albums/Albums";
import Todos from "./components/Todos/Todos";
import Comments from "./components/Comments/Comments";
import Layout from "./components/Layout/Layout";
import Post from "./components/Post/Post";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path="/todos" element={<Todos/>}/>
                    <Route path="/albums" element={<Albums/>}/>
                    <Route path="/comments" element={<Comments/>}/>
                    <Route path={'/comments/:postId'} element={<Post/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
