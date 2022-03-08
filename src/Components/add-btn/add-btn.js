import React from 'react';
import { useState } from 'react';
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillPlusCircleFill } from "react-icons/bs";
import "./add-btn.css";
const AddBtn = ({handleClick, when}) => {

    const [isShown, setIsShown] = useState(false);
    return (
        <div className='add-btn'
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            onClick={handleClick}>  
            <h2 className='add-todo__when-text'>{when}</h2>
            {isShown ? <BsFillPlusCircleFill color='red' />
                : <AiOutlinePlus color='red' className='add-btn__icon' />}
            <span className='add-btn__text'>Добавить задачу</span>
        </div>
    );
}

export default AddBtn;