import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteDogAction} from '../../redux/reducers/dogs.reducer';


const DogItem = ({dog}) => {
    const dispatch = useDispatch()
    return (
        <div>

            <div className={'item'}>
              <div>  Dog Id: {dog.id}</div>
               <div> Dog name: {dog.name}</div>
                <button style={{color: 'red', marginLeft: '10px'}}
                        onClick={()=>dispatch(deleteDogAction(dog.id))}>Delete</button>
            </div>
        </div>
    );
};

export default DogItem ;