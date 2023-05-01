import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteCatAction} from '../../redux/reducers/cats.reducer';






const CatItem = ({cat}) => {
    const dispatch = useDispatch()
    return (
        <div>

            <div className={'item'}>
              <div>  Cat Id: {cat.id}</div>
               <div> Cat name: {cat.name}</div>
                <button style={{color: 'red', marginLeft: '10px'}}
                        onClick={()=>dispatch(deleteCatAction(cat.id))}>Delete</button>
            </div>
        </div>
    );
};

export default CatItem ;