import React, {FC} from 'react';

import {IComment} from "../../interfaces";


interface IProps {
    comment: IComment
}

const Comment: FC<IProps> = ({comment}) => {
    const {id, name, email, body} = comment

    return (
        <div className={'item_comment'}>
            <div><span>ID:</span> <span className={'span_dark'}> {id}</span></div>
            <div><span>NAME:</span> <span className={'span_dark'}> {name}</span></div>
            <div><span>EMAIL:</span> <span className={'span_dark'}> {email}</span></div>
            <div><span>BODY:</span> <span className={'span_dark'}> {body}</span></div>
        </div>
    );
};

export {Comment};