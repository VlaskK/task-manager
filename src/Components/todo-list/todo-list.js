import React from 'react';
import { useSelector } from 'react-redux';
import parseDate from '../../utils/dateParser';
import isEqual from '../../utils/object-comparator';
import Todo from '../todo/todo';
import "./todo-list.scss";

const TodoList = () => {

    const todoList = useSelector(state => state.todo.todos);
    const page = useSelector(state => state.menu.whichPage);

    const filterTodos = () => {

        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const todayTerm = parseDate(today.toString());
        const tomorrowTerm = parseDate(tomorrow.toString());

        switch (page) {
            case "Сегодня":
                return todoList.map((todo) => isEqual(todo.term, todayTerm) && <Todo todo={todo} key={`${todo.id}`} className="todo" />);
            case "Предстоящие":
                return todoList.map((todo) => isEqual(todo.term, tomorrowTerm) && <Todo todo={todo} key={`${todo.id}`} className="todo" />);
            default:
                return todoList.map((todo) => <Todo todo={todo} key={`${todo.id}`} className="todo" />);
        }
    }

    return (
        <div className='todo-list'>
            {filterTodos()}
        </div>
    );
}

export default TodoList;