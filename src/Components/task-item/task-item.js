import React from 'react';
import { useSelector } from 'react-redux';
import { RiTodoLine } from "react-icons/ri";
import "./task-item.scss"

const TaskItem = () => {

    const todos = useSelector(state => state.todo.todos);

    return (
        <div className='task-item'>
            <RiTodoLine size={20} className='task-item__icon'/>
            <div className='task-item__counter' quanity={5}>
                0/5
            </div>
        </div>
    );
}

export default TaskItem;