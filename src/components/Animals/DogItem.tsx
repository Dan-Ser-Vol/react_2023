import React, {FC} from 'react';

import {deleteDogAction, IDog} from "../../reducers/Dog.reducer";
import {useAppReducer} from "../../hooks/useAppReducer";

interface IProps {
    dog: IDog
}

const Dog:FC<IProps> = ({dog}) => {
    const [ , dispatch] = useAppReducer((state: { dogs: IDog }) => state.dogs)

    return (
        <div className={'item'}>
         Dog name:   {dog.name}
            <button style={{color: 'red', marginLeft: '10px'}}
                    onClick={()=>dispatch(deleteDogAction(dog.id))}>Delete</button>
        </div>

    )
}

export default Dog ;