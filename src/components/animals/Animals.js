import React from 'react';
import CatsForm from './CatsForm';
import DogsForm from './DogsForm';



const Animals = () => {
    return (
        <>
            <div className={'blockForm'}>
                <div>
                    < DogsForm/>
                </div>
                <div>
                    <CatsForm/>
                </div>
            </div>
        </>
    );
};

export default Animals