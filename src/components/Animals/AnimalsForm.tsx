import React, {FC} from 'react';
import {useForm} from "react-hook-form";

import {useAppReducer} from "../../hooks/useAppReducer";
import {addCatAction, ICat} from "../../reducers/Cat.reducer";
import Cat from "./CatItem";



const AnimalsForm:FC = () => {

    const [{cats}, dispatch ] = useAppReducer((state: { cats: ICat[]; }) => state.cats)

    const {register, handleSubmit, reset} = useForm<ICat>({
        mode: "all",
    })

    const saveCat = (cat:ICat) => {
        dispatch(addCatAction(cat));
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(saveCat)}>
                <input type="text" {...register('name')}/>
                <button>ADD CAT</button>
            </form>
            <div>
                {
                    cats &&
                    cats.map((cat: ICat, idx:number) => <Cat key={idx} cat={cat}/>)
                }
            </div>
        </>


    );
};

export default  AnimalsForm