import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { AiOutlineInbox } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { BsCalendar3 } from "react-icons/bs";

import "./menu.css";

const Menu = (props) => {

    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.menu.isVisible);

    return (
        isVisible ? (
            <div className='Menu'>
                <ul className='Menu__list-items'>
                    <li className='Menu__item'>
                        <Link to="/inbox" className='Menu__item-link'>
                            <div className='Menu__inbox'>
                                <AiOutlineInbox className='Menu__item-icon' size={18} color="#246fe0" />
                                <span className='Menu__item-text'>Входящие</span>
                            </div>
                        </Link>
                    </li>
                    <li className='Menu__item'>
                        <Link to="/today" className='Menu__item-link'>
                            <div className='Menu__today'>
                                <BsCalendarDate className='Menu__item-icon' size={18} color="#058527" />
                                <span className='Menu__item-text'>Сегодня</span>
                            </div>
                        </Link>
                    </li>
                    <li className='Menu__item'>
                        <Link to="/upcoming" className='Menu__item-link'>
                            <div className='Menu__upcoming'>
                                <BsCalendar3 className='Menu__item-icon' size={18} color="#692fc2" />
                                <span className='Menu__item-text'>Предстоящее</span>
                            </div>
                        </Link>

                    </li>
                </ul>
            </div>
        )
            : null
    );
}

export default Menu;