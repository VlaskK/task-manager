import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Todo from '../todo/todo';
import "./todo-list.css";

const TodoList = () => {

    const todoList = useSelector(state => state.todo.todos);

    return (
        <div className='todo-list'>
            {todoList.map((todo) => <Todo todo={todo} key={`${todo.id}`}/>)}
        </div>
    );
}

export default TodoList;