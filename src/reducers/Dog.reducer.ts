const ADD_DOG = 'ADD_DOG';
const DELETE_DOG = 'DELETE_DOG';

interface IState {
    dogs: IDog[];
}

export interface IDog {
    id: number;
    name: string;
}

interface IAddDogAction {
    type: typeof ADD_DOG;
    payload: IDog;
}

interface IDeleteDogAction {
    type: typeof DELETE_DOG;
    payload: number;
}

type IAction = IAddDogAction | IDeleteDogAction;

const initialStateDogs: IState = {
    dogs: [],
};

const dogReducer = (state = initialStateDogs, action: IAction): IState => {
    switch (action.type) {
        case ADD_DOG:
            const dog: IDog = action.payload;
            const dogId = state.dogs.slice(-1)[0]?.id + 1 || 1;
            dog.id = dogId;
            return {...state, dogs: [...state.dogs, dog]};
        case DELETE_DOG:
            const dogIndex = state.dogs.findIndex((value) => value.id === action.payload);
            state.dogs.splice(dogIndex, 1);
            return {...state};
        default:
            return state;
    }
};

const addDogAction = (dog: IDog): IAddDogAction => ({type: ADD_DOG, payload: dog});
const deleteDogAction = (id: number): IDeleteDogAction => ({type: DELETE_DOG, payload: id});

export {addDogAction, dogReducer, initialStateDogs, deleteDogAction};
