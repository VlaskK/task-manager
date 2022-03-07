import React from 'react';
import { useSelector } from 'react-redux';
import AddTodo from '../../Components/addTodo/add-todo';
import TodoList from '../../Components/todo-list/todo-list';

import "./inbox-page.css";

const InboxPage = () => {

    const todoList = useSelector(state => state.todo.todos);

    return (
        <div className='inbox-page'>
            {todoList.length > 0 && <TodoList/>}
            <AddTodo when="Входящие" className="inbox-page__add-todo"/>
        </div>
    );
}

export default InboxPage;