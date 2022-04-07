import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsVisible } from '../../Store/reducer';
import { FiSettings } from "react-icons/fi";
import { BiNotification } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import Menu from '../menu/menu';

import TaskItem from '../task-item/task-item';

import "./header.scss"


const Header = () => {

    const dispatch = useDispatch();
    const isMenuVisible = useSelector(state => state.menu.isVisible);

    const handleClick = () => {
        dispatch(setIsVisible(!isMenuVisible));
    }

    return (
        <div>
            <header className='header'>
                <div className='header__menu-icon'>
                    <AiOutlineMenu onClick={handleClick} />
                </div>
                <div className='header__left-group'>
                    <div className='header__notifications header__item'>
                        <BiNotification size={20} />
                    </div>
                    <div className='header__settings header__item'>
                        <FiSettings size={20} />
                    </div>
                    <div className='header__task-item header__item'>
                        <TaskItem />
                    </div>
                </div>

            </header>
        </div>
    );
}

export default Header;