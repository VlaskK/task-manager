import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormIsShown } from '../../Store/todo/reducer';
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./add-btn.css";
const AddBtn = ({ when }) => {

    const [isShown, setIsShown] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className='add-btn'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={() => dispatch(setFormIsShown(true))}>
            <h2 className='add-todo__when-text'>{when}</h2>
            {isShown ? <BsFillPlusCircleFill color='red' />
                : <AiOutlinePlus color='red' className='add-btn__icon' />}
            <span className='add-btn__text'>Добавить задачу</span>

            {/* <div className="add-btn__icon">
                <AiOutlinePlus color='red' className='add-btn__empty-icon' />
                <BsFillPlusCircleFill color="red" className='add-btn__filled-icon'/>
                <span className='add-btn__text'>Добавить задачу</span>
            </div> */}
        </div>
    );
}

export default AddBtn;

