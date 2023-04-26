import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";


import './index.css';
import App from './App';
import Provider from "./hoc/Provider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Provider>
            <App/>
        </Provider>
    </BrowserRouter>
);

