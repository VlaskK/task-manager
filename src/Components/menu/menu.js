import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setIsVisible } from '../../Store/reducer';
import { AiOutlineInbox } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";

import "./menu.scss";

const Menu = () => {

    const dispatch = useDispatch();
    const menuRef = useRef(null);

    useEffect(() => {
        const onClick = (e) => menuRef.current.contains(e.target) || dispatch(setIsVisible(false));
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick); 
    },[]);

    return (
            <div className='menu' ref={menuRef}>
                <ul className='menu__list-items'>
                    <li className='menu__item'>
                        <Link to="/inbox" className='menu__item-link'>
                            <div className='menu__inbox'>
                                <AiOutlineInbox className='menu__item-icon' size={18} color="#246fe0" />
                                <span className='menu__item-text'>Входящие</span>
                            </div>
                        </Link>
                    </li>
                    <li className='menu__item'>
                        <Link to="/today" className='menu__item-link'>
                            <div className='menu__today'>
                                <BsCalendarDate className='menu__item-icon' size={18} color="#058527" />
                                <span className='menu__item-text'>Сегодня</span>
                            </div>
                        </Link>
                    </li>
                    <li className='menu__item'>
                        <Link to="/upcoming" className='menu__item-link'>
                            <div className='menu__upcoming'>
                                <BsCalendar3 className='menu__item-icon' size={18} color="#692fc2" />
                                <span className='menu__item-text'>Предстоящее</span>
                            </div>
                        </Link>

                    </li>
                </ul>
            </div>
    );
}

export default Menu;