import React, {FC} from 'react';
import UserForm from "../../components/Users/UserForm";
import {Users} from "../../components";


const UserPage: FC = () => {
    return (
        <div className={'container'}>
            <UserForm/>
            <Users/>
        </div>
    );
};
export {UserPage};
