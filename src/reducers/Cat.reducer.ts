import {IAction} from "../interfaces/animal.interfaces";

const ADD_CAT = 'ADD_CAT';
const DELETE_CAT = 'DELETE_CAT';

interface IState {
    cats: ICat[];
}

export interface ICat {
    id: number;
    name: string;
}


const initialStateCats: IState = {
    cats: [],
};

const catReducer = (state = initialStateCats, action: IAction): IState => {
    switch (action.type) {
        case ADD_CAT:
            const cat: ICat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id + 1 || 1;
            cat.id = catId;
            return {...state, cats: [...state.cats, cat]};
        case DELETE_CAT:
            const catIndex = state.cats.findIndex((value) => value.id === action.payload);
            state.cats.splice(catIndex, 1);
            return {...state};
        default:
            return state;
    }
};

const addCatAction = (cat: ICat) => ({type: ADD_CAT, payload: cat});
const deleteCatAction = (id: number) => ({type: DELETE_CAT, payload: id});

export {addCatAction, catReducer, initialStateCats, deleteCatAction};
