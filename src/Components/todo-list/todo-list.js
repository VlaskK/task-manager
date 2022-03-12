import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../todo/todo';
import "./todo-list.css";

const TodoList = () => {

    const todoList = useSelector(state => state.todo.todos);

    return (
        <div className='todo-list'>
            {todoList.map((todo) => <Todo todo={todo} key={`${todo.id}`} className="todo"/>)}
        </div>
    );
}

export default TodoList;