import React, {FC, useState} from 'react';
import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks/useAppReducer";
import {addDogAction, IDog} from "../../reducers/Dog.reducer";
import DogItem from "./DogItem";


const DogsForm: FC = () => {
    const [{dogs}, dispatchDog] = useAppReducer((state: { dogs: IDog }) => state.dogs)
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsInputEmpty(!event.target.value);
    };


    const {register, handleSubmit, reset} = useForm<IDog>({
        mode: "all",
    })

    const saveDog = (dog: IDog) => {
        dispatchDog(addDogAction(dog));
        reset()
        setIsInputEmpty(true);
    }
    return (
      <div className={'dogs'}>
          <form onSubmit={handleSubmit(saveDog)}>
              <input type="text" {...register('name')} onChange={event => handleInputChange(event)}/>
              <button disabled={isInputEmpty}>ADD DOG</button>
          </form>
          {
              dogs &&
              dogs.map((dog: IDog, idx: number) => <DogItem key={idx} dog={dog}/>)
          }
      </div>
    );
};

export default  DogsForm;