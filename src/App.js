import React from 'react';
import {Route, Routes} from "react-router-dom"

import Layout from "./components/Layout/Layout";

import './App.css';
import Animals from './components/animals/Animals';
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comments';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path="/posts" element={<Posts/>}/>
                    <Route path="/animals" element={<Animals/>}/>
                    <Route path="/comments" element={<Comments/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;