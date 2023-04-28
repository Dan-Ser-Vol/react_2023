import React, {FC} from 'react';

import DogsForm from "./DogsForm";
import CatsForm from "./CatsForm";


const Animals: FC = () => {
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