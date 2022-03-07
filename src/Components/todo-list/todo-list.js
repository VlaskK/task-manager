import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { addTodo, removeTodo } from '../../Store/todo/reducer';
import { AiOutlineEdit } from "react-icons/ai";
import "./todo-list.css";

const TodoList = () => {

    const todoList = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();


    const completeTodo = (id) => {
        // e.stopPropagation();
        // dispatch(removeTodo(id));
        console.log(id)
    }

    const editTodo = () => {

    }

    return (
        <div className='todo-list'>
            {todoList.map((todo) =>
                <div className='todo'  key={nanoid(8)}>
                    <input type="radio" className='todo__checkbox' onClick={completeTodo(todo.id)}/>
                    <div className='todo__content'>
                        <span className='todo__spans'>
                            <span className='todo__text'>{todo.text}</span>
                            <span className='todo__desc'><br /> {todo.desc}</span>
                        </span>
                        <AiOutlineEdit className='todo__edit' size={20} onClick={() => console.log("edit")}/>
                    </div>
                </div>)}
        </div>
    );
}

export default TodoList;