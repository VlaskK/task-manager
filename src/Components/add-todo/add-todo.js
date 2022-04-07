import React from 'react';
import { useSelector } from 'react-redux';
import AddBtn from '../add-btn/add-btn';
import AddForm from '../add-form/add-form';

import "./add-todo.scss";
const AddTodo = () => {

    const formIsShown = useSelector(state => state.todo.formIsShown);

    return (
        <div className='add-todo'>
            {formIsShown ?
                <AddForm className="add-todo__form"/>
                : <AddBtn className="add-todo__btn"/>
            }
        </div>
    );
}

export default AddTodo;