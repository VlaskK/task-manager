import React from 'react';
import { useSelector } from 'react-redux';
import AddBtn from '../add-btn/add-btn';
import AddForm from '../add-form/add-form';

import "./add-todo.css";
const AddTodo = ({ when }) => {

    const formIsShown = useSelector(state => state.todo.formIsShown);

    return (
        <div className='add-todo'>
            {formIsShown ?
                <AddForm when={when} />
                : <AddBtn when={when} />
            }
        </div>
    );
}

export default AddTodo;