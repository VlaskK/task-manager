import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormIsShown } from '../../Store/todo/reducer';
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./add-btn.css";
const AddBtn = () => {

    const dispatch = useDispatch();

    return (
        <div className='add-btn'
            onClick={() => dispatch(setFormIsShown(true))}>
            <div className="add-btn__icon">
                <AiOutlinePlus color='red' className='add-btn__empty-icon' />
                <BsFillPlusCircleFill color="red" className='add-btn__filled-icon'/>
            </div>
            <span className='add-btn__text'>Добавить задачу</span>
        </div>
    );
}

export default AddBtn;

