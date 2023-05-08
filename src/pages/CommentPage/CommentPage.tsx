import React from 'react';
import {Comments, CommentForm} from "../../components";

const CommentPage = () => {
    return (
        <div className={'container'}>
            <CommentForm/>
            <Comments />
        </div>
    );
};

export {CommentPage};
