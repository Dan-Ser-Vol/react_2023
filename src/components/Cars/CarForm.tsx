import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {IUseState} from "../../types/useState.type";
import {ICar} from "../../interfaces/car.interface";
import {carValidator} from "../../validators/car.validator";
import {carService} from "../../services/car.service";

interface IProps {
    carForUpdate: ICar | null
    setOnChange: IUseState<boolean>
    setCarForUpdate: IUseState<ICar | null>
}

const CarForm: FC<IProps> = ({setOnChange, carForUpdate, setCarForUpdate}) => {

    useEffect(() => {
        if (carForUpdate) {
            Object.entries(carForUpdate).forEach(([key, value]) => {
                if (key !== 'id') {
                    setValue(key as keyof ICar, value, {shouldValidate: true})
                }
            })
        }
    }, [carForUpdate])


    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidator)
    })

    const save: SubmitHandler<ICar> = async (car) => {
        await carService.create(car)
        setOnChange(prevState => !prevState)
        reset()
    }

    const update: SubmitHandler<ICar> = async (car) => {
        await carService.updateById(carForUpdate!.id, car)
        setOnChange(prevState => !prevState)
        reset()
        setCarForUpdate(null)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate ? update : save)}>
                <input type="text" placeholder={'Enter brand'} {...register('brand')}/>
                <input placeholder={'Enter brand'} {...register('price')}/>
                <input placeholder={'Enter year'} {...register('year')}/>
                <button disabled={!isValid}>{carForUpdate ? 'UPDATE' : 'SAVE'}</button>
            </form>
            <div>
                {errors.brand && <div>{errors.brand.message}</div>}
                {errors.price && <div>{errors.price.message}</div>}
                {errors.year && <div>{errors.year.message}</div>}
            </div>
        </div>
    );
};

export default CarForm;