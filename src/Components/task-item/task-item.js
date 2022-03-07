import React from 'react';

import { RiTodoLine } from "react-icons/ri";
import "./task-item.css"

const TaskItem = () => {
    return (
        <div className='task-item'>
            <RiTodoLine size={25} className='task-item__icon'/>
            <div className='task-item__counter' quanity={5}>
                0/5
            </div>
        </div>
    );
}

export default TaskItem;