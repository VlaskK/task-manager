import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTermIsShown } from '../../Store/todo/reducer';
import { setTerm } from '../../Store/calendar/reducer';
import { BsCalendarDate } from "react-icons/bs";
import { BsSun } from "react-icons/bs"
import { BsCalendar4Week } from "react-icons/bs";
import { MdNotInterested } from "react-icons/md";
import Calendar from 'react-calendar';

import "./term.css";
const Term = (props) => {

    const termRef = useRef(null);
    const isTermShown = useSelector(state => state.todo.termIsShown);
    const dispatch = useDispatch();

    const [input, setInput] = useState("");
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const onClick = (e) => termRef.current.contains(e.target) || dispatch(setTermIsShown(false));
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const handleChange = (e) => {
        setDate(e.target);
        dispatch(setTerm(e));
        console.log(e);
    }

    return (
        <div className='term' ref={termRef}>
            <div className='term__search'>
                <input type="text"
                    placeholder='Введите срок выполнения'
                    className='term-input'
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
            </div>

            <div className="term__list">
                <div className="term__today">
                    <BsCalendarDate className='term__icon'/>
                    <span className='term__main-text'>Сегодня</span>
                </div>
                <div className='term__today'>
                    <BsSun className='term__icon'/>
                    <span className='term__main-text'>Завтра</span>
                </div>
                <div className="term__next-week">
                    <BsCalendar4Week className='term__icon'/>
                    <span className='term__main-text'>След. неделя</span>
                </div>
                <div className="term__no-term">
                    <MdNotInterested className='term__icon'/>
                    <span className='term__main-text'>Без срока</span>
                </div>
            </div>

            <div className='term__calendar'>
            <Calendar onChange={handleChange} value={date} />
            </div>


        </div>
    );
}

export default Term;