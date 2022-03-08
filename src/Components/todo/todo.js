import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { removeTodo } from '../../Store/todo/reducer';
import { AiOutlineEdit } from "react-icons/ai";
import "./todo.css"
const Todo = ({todo}) => {

    const dispatch = useDispatch();
    
    const completeTodo = (e) => {
        e.stopPropagation();
        dispatch(removeTodo(todo.id));
    }

    const editTodo = () => {
        
    }

    return (
        <div className='todo'>
            <input type="radio" className='todo__checkbox' onChange={completeTodo} />
            <div className='todo__content'>
                <span className='todo__spans'>
                    <span className='todo__text'>{todo.text}</span>
                    <span className='todo__desc'><br /> {todo.desc}</span>
                </span>
                <AiOutlineEdit className='todo__edit' size={20} onClick={() => console.log("edit")} />
            </div>
        </div>
    );
}

export default Todo;