import React, {FC} from 'react';
import {ITodo} from "../../interfaces/todo.interface";


interface IProps {
    todo: ITodo
}


const Todo: FC<IProps> = ({todo}) => {
    return (
        <div className={'item'}>
            <div><span>User ID:</span>{todo.userId}</div>
            <div><span>ID:</span>{todo.id}</div>
            <div><span>Title:</span>{todo.title}</div>
            <div>
                <span>Completed:</span>
                <span className={todo.completed ? 'green' : 'red'}>{todo.completed.toString()}</span>
            </div>
        </div>
    );
};

export default Todo;