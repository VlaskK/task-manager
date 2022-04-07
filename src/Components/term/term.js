import React from 'react';
import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setTermIsShown } from '../../Store/todo/reducer';
import parseDate from '../../utils/dateParser';
import { BsCalendarDate } from "react-icons/bs";
import { BsSun } from "react-icons/bs"
import { BsCalendar4Week } from "react-icons/bs";
import { MdNotInterested } from "react-icons/md";
import Calendar from 'react-calendar';

import "./calendar.css"
import "./term.scss";
const Term = ({ setTodoTerm }) => {

    const termRef = useRef(null);
    const dispatch = useDispatch();

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const onClick = (e) => termRef.current.contains(e.target) || dispatch(setTermIsShown(false));
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const selectDate = (e) => {
        if (e !== null) {
            const newDate = parseDate(e.toString());
            setDate(e);
            setTodoTerm(newDate);
            dispatch(setTermIsShown(false));
        }
    }

    const onToday = () => {
        const today = parseDate((new Date()).toString());
        setTodoTerm(today);
        dispatch(setTermIsShown(false));
    }

    const onTomorrow = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        
        const tomorrowTerm = parseDate(tomorrow.toString());
        setTodoTerm(tomorrowTerm);
        dispatch(setTermIsShown(false));
    }

    const onNextWeek = () => {
        const today = new Date();
        const nextWeek = new Date(today);
        nextWeek.setDate(nextWeek.getDate() + 7);

        const nextWeekTerm = parseDate(nextWeek.toString());
        setTodoTerm(nextWeekTerm);
        dispatch(setTermIsShown(false));
    }

    const onNoTerm = () => {
        setTodoTerm(null);
        dispatch(setTermIsShown(false));
    }


    return (
        <div className='term' ref={termRef}>
            <div className="term__list">
                <div className="term__item" onClick={onToday}>
                    <BsCalendarDate className='term__icon' color="#058527"/>
                    <span className='term__main-text'>Сегодня</span>
                </div>
                <div className='term__item' onClick={onTomorrow}>
                    <BsSun className='term__icon' color="#ad6200"/>
                    <span className='term__main-text'>Завтра</span>
                </div>
                <div className="term__item" onClick={onNextWeek}>
                    <BsCalendar4Week className='term__icon' color="#246fe0"/>
                    <span className='term__main-text'>След. неделя</span>
                </div>
                <div className="term__item" onClick={onNoTerm}>
                    <MdNotInterested className='term__icon' color="grey"/>
                    <span className='term__main-text'>Без срока</span>
                </div>
            </div>

            <div className='term__calendar'>
                <Calendar onChange={selectDate} value={date} className="react-calendar"/>
            </div>

        </div>
    );
}

export default Term;