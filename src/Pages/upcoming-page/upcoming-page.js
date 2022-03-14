import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../../Components/todo-list/todo-list';
import AddTodo from '../../Components/add-todo/add-todo';
import "./upcoming-page.css";
const UpComingPage = () => {

    const todoList = useSelector(state => state.todo.todos);

    return (
        <div className='upcoming-page'>
            <div className="upcoming-page__title">
                <h2>Предстоящие</h2>
            </div>
            {todoList.length > 0 && <TodoList className="upcoming-page__todo-list"/>}
            <AddTodo className="upcoming-page__add-todo"/>
        </div>
    );
}

export default UpComingPage;