import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPage } from '../../Store/reducer';
import AddTodo from '../add-todo/add-todo';
import Menu from '../menu/menu';
import TodoList from '../todo-list/todo-list';

import "./page.scss";

const Page = ({pageText}) => {
    const dispatch = useDispatch();
    const todoList = useSelector(state => state.todo.todos);
    const isMenuVisible = useSelector(state => state.menu.isVisible);

    dispatch(setPage(pageText));

    return (
        <div className='wrapper'>  
        {isMenuVisible && <Menu/>}
            <div className='page'>
                <div className='page__title'>
                    <h2>{pageText}</h2>
                </div>
                {todoList.length > 0 && <TodoList className="page__todo-list" />}
                <AddTodo className="page__add-todo" />
            </div>
        </div>

    );
};

export default Page;