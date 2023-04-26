import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom"


import Layout from "./components/Layout/Layout";
import Comments from "./components/Comments/Comments";
import AnimalsForm from "./components/Animals/AnimalsForm";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path={'/'} element={<Layout/>}>
            {/*<Route path="/todos" element={<Posts/>}/>*/}
            <Route path="/animals" element={<AnimalsForm/>}/>
            <Route path="/comments" element={<Comments/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;