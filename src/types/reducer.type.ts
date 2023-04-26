import {Dispatch} from "react";

export type IReducer<T> = [T, Dispatch<{ type: string; payload?: any }>];