import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import DogItem from './DogItem';
import {addDogAction} from '../../redux/reducers/dogs.reducer';

const DogsForm = () => {
    const [isInputEmpty, setIsInputEmpty] = useState(true)

    const handleInputChange = (event) => {
        setIsInputEmpty(!event.target.value)
    }

    const {dogs} = useSelector(state => state.dogs)
    const dispatch = useDispatch()

    const {register, handleSubmit, reset} = useForm()

    const save = (dog) => {
        dispatch(addDogAction(dog))
        reset()
        setIsInputEmpty(true)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" {...register('name')} onChange={(e)=>handleInputChange(e)}/>
                <button disabled={isInputEmpty}>ADD DOG</button>
            </form>

            {dogs.map((dog, idx) => <DogItem dog={dog} key={idx}/>)}
        </div>
    );
};

export default DogsForm;
