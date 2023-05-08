import React from 'react';
import {CarForm, Cars, ErrorDisplay} from "../../components";
import {useAppSelector} from "../../hooks";


const CarPage = () => {
    const {errors} = useAppSelector(state => state.carReducer)
    return (
        <div className={'container'}>
            <CarForm/>
            {
                errors && <ErrorDisplay errors={errors}/>
            }
            <Cars/>
        </div>
    );
};

export  {CarPage};
