import {FC} from 'react';
import {RegisterForm} from "../../components";

interface IProps{

}

const RegisterPage:FC<IProps>  = () => {
 return (
  <div>
   <RegisterForm/>
  </div>
 );
};

export {RegisterPage};