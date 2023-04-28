import {createContext, FC, ReactNode, useReducer} from "react";

import {dogReducer, initialStateDogs} from "../reducers/Dog.reducer";
import {catReducer, initialStateCats} from "../reducers/Cat.reducer";

export const StateContext = createContext<IReducers | null>(null);

interface IProps {
    children: ReactNode;
}

interface IReducers {
    dogs: any
    cats: any
}

const Provider: FC<IProps> = ({children}) => {

    const reducers: IReducers = {
        dogs: useReducer(dogReducer, initialStateDogs),
        cats: useReducer(catReducer, initialStateCats)
    };

    return <StateContext.Provider value={reducers}>{children}</StateContext.Provider>;
};

export default Provider;
