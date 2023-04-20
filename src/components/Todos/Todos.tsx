import React, { useEffect, useState } from 'react';
import {todoService} from "../../services/todos.service";
import {ITodo} from "../../interfaces/todo.interface";
import Todo from "./Todo";

const Todos = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);


    useEffect(() => {
        const fetchTodos = async () => {
            const { data } = await todoService.getAll();
            setTodos(data);
        };
        fetchTodos();
    }, []);

    return (
        <div>
            {
                todos.map(todo=> <Todo key={ todo.id } todo={todo}/>)
            }
        </div>
    );
};

export default Todos;