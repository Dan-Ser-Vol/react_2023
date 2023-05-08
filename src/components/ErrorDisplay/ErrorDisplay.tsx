import React, {FC} from 'react';
import {IError} from "../../interfaces";

interface IProps {
    errors: IError
}

const ErrorDisplay:FC<IProps> = ({errors}) => {

    return (
        <div className="error-container">
            <h2>Oops! Something went wrong:</h2>
            {errors?.detail && <h2>{errors.detail}</h2>}
            {errors?.brand && <h2>{errors.brand}</h2>}
            {errors?.price && <h2>{errors.price}</h2>}
            {errors?.year && <h2>{errors.year}</h2>}
        </div>
    );
}

export {ErrorDisplay};
