import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../Store/reducer';
import AddTodo from '../../Components/add-todo/add-todo';
import TodoList from '../../Components/todo-list/todo-list';

import "./inbox-page.css";

const InboxPage = () => {

    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todo.todos);
    dispatch(setPage("Входяшие"));

    return (
        <div className='inbox-page'>
            <div className='inbox-page__title'>
                <h2>Входящие</h2>
            </div>
            {todoList.length > 0 && <TodoList className="inbox-page__todo-list"/>}
            <AddTodo className="inbox-page__add-todo"/>
        </div>
    );
}

export default InboxPage;