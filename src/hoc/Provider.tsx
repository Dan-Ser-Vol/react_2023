import React, { createContext, FunctionComponent, ReactNode, useReducer } from 'react';

import {catReducer, initialStateCats} from '../reducers/Cat.reducer';
import {dogReducer, initialStateDogs} from "../reducers/Dog.reducer";


interface IProps {
    children: ReactNode;
}

interface IReducers {
    dogs: any
     cats: any
}

export const StateContext = createContext<IReducers| null>(null);


const Provider: FunctionComponent<IProps> = ({ children }) => {
    const reducers = {
        dogs: useReducer(dogReducer, initialStateDogs),
        cats: useReducer(catReducer, initialStateCats),
    };

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export default Provider;
