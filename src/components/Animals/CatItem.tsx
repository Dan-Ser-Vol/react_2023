import React, {FC} from 'react';

import {deleteCatAction, ICat} from "../../reducers/Cat.reducer";
import {useAppReducer} from "../../hooks/useAppReducer";


interface IProps {
 cat: ICat
}

const Cat : FC<IProps> = ({cat}) => {
    const [, dispatch ] = useAppReducer((state: { cats: ICat[]; }) => state.cats)
    return (
        <div>

            <div className={'item'}>
             Cat name: {cat.name}
                <button style={{color: 'red', marginLeft: '10px'}}
                        onClick={()=>dispatch(deleteCatAction(cat.id))}>Delete</button>
            </div>
        </div>
    );
};

export default Cat ;