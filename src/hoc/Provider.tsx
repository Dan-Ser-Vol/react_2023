import React, {createContext, FC, ReactNode} from 'react';
import {IPost} from "../interfaces/post.interfaces";
import {IComment} from "../interfaces/comment.interfaces";

interface IProps {
 children :ReactNode
}

interface IContext {
    posts:IPost[]| null
    comments:IComment[] | null
}

const StateContext = createContext(null)

const reducers = {}

const Provider: FC<IProps> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default  Provider;