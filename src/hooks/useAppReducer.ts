import {useContext} from "react";
import {StateContext} from "../hoc/Provider";


// @ts-ignore
const  useAppReducer = (state) => state(useContext(StateContext))

export {
    useAppReducer
}