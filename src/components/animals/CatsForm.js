import React, { useState} from 'react';
import {useForm} from "react-hook-form";


import CatItem from "./CatItem";
import {useDispatch, useSelector} from 'react-redux';
import {addCatAction} from '../../redux/reducers/cats.reducer';


const CatsForm = () => {
    const {cats}= useSelector((state) => state.cats)
    const dispatch = useDispatch()

    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const handleInputChange = (event) => {
        setIsInputEmpty(!event.target.value);
    };


    const {register, handleSubmit, reset } = useForm({
        mode: "all",
    })

    const saveCat = (cat) => {
        dispatch(addCatAction(cat));
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
                cats.map((cat, idx) => <CatItem key={idx} cat={cat}/>)
            }
        </div>
    );
};

export default  CatsForm;