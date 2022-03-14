import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../../Components/todo-list/todo-list';
import AddTodo from '../../Components/add-todo/add-todo';
import "./today-page.css";

const TodayPage = () => {

    const todoList = useSelector(state => state.todo.todos);

    return (
        <div className='today-page'>
            <div className="today-page__title">
                <h2>Сегодня</h2>
            </div>
            {todoList.length > 0 && <TodoList className="today-page__todo-list"/>}
            <AddTodo className="today-page__add-todo"/>
        </div>
    );
}

export default TodayPage;