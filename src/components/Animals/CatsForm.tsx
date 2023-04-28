import React, {FC, useState} from 'react';
import {useAppReducer} from "../../hooks/useAppReducer";
import {useForm} from "react-hook-form";

import {addCatAction, ICat} from "../../reducers/Cat.reducer";
import Cat from "./CatItem";
import {IDog} from "../../reducers/Dog.reducer";


const CatsForm: FC = () => {
    const [{cats}, dispatchCat] = useAppReducer((state: { cats: IDog }) => state.cats)

    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsInputEmpty(!event.target.value);
    };


    const {register, handleSubmit, reset } = useForm<ICat>({
        mode: "all",
    })

    const saveCat = (cat: ICat) => {
        dispatchCat(addCatAction(cat));
        reset()
        setIsInputEmpty(true);
    }
    return (
        <div className={'cats'}>
            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text"  {...register('name')} onChange={event => handleInputChange(event)}/>
                      <button disabled={isInputEmpty}  >
                       ADD CAT
                      </button>
            </form>
            {
                cats &&
                cats.map((cat: ICat, idx: number) => <Cat key={idx} cat={cat}/>)
            }
        </div>
    );
};

export default  CatsForm;