import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormIsShown, setEditTodoId, setTermIsShown, editTodo } from '../../Store/todo/reducer';
import { nanoid } from 'nanoid';
import { addTodo } from '../../Store/todo/reducer';
import parseDate from '../../utils/dateParser';
import isEqual from '../../utils/object-comparator';
import Term from '../term/term';
import "./add-form.scss";

const AddForm = () => {

    const [todoText, setTodoText] = useState("");
    const [todoDesc, setTodoDesc] = useState("");
    const [todoTerm, setTodoTerm] = useState(null);
    const [todoProject, setTodoProject] = useState(null);

    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.todos);
    const editTodoId = useSelector(state => state.todo.editTodoId);
    const isTermShown = useSelector(state => state.todo.termIsShown);

    useEffect(() => {
        if (editTodoId) {
            const editedTodo = todo.find(todo => todo.id === editTodoId);
            setTodoText(editedTodo.text);
            setTodoDesc(editedTodo.desc);
            setTodoTerm(editedTodo.term);
            setTodoProject(editedTodo.project);
        }
    }, [])

    const clearState = () => {
        setTodoText("");
        setTodoDesc("");
        setTodoTerm(null);
        setTodoProject(null);

        dispatch(setFormIsShown(false));
        dispatch(setEditTodoId(null));
        dispatch(setTermIsShown(false));
    }

    const handleAdd = () => {
        const newTodo = {
            text: todoText,
            desc: todoDesc,
            term: todoTerm,
            project: todoProject,
            id: nanoid(8)
        }

        if (editTodoId) {
            const editedTodo = {
                text: todoText,
                desc: todoDesc,
                term: todoTerm,
                project: todoProject,
                id: editTodoId
            }
            dispatch(editTodo(editedTodo));
            clearState();
        } else {
            dispatch(addTodo(newTodo));
            clearState();
        }
    }

    const getTermStr = () => {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);

        const todayTerm = parseDate(today.toString());
        const tomorrowTerm = parseDate(tomorrow.toString());

        const isToday = isEqual(todoTerm, todayTerm);
        const isTomorrow = isEqual(todoTerm, tomorrowTerm);

        if (isToday) return "Сегодня";
        if (isTomorrow) return "Завтра";
        if (!todoTerm) return "Срок";

        return `${todoTerm.dayOfMonth} ${todoTerm.month}`

    }


    return (
        <div className='add-form'>
            <div className='add-form__task-editor'>
                <div className="add-form__inputs">
                    <input type="text"
                        placeholder='пример., Встреча по поводу дня рождения'
                        className='add-form__task-input'
                        value={todoText}
                        onChange={(e) => setTodoText(e.target.value)} />
                    <input type="text"
                        placeholder='Описание'
                        className='add-form__task-input'
                        value={todoDesc}
                        onChange={(e) => setTodoDesc(e.target.value)} />
                </div>
                <div className="add-form__conf-btns">
                    <button type="button" className="term-btn add-form__conf-btn" onClick={() => dispatch(setTermIsShown(true))}>
                        <span className='task-button__text'>{getTermStr()}</span>
                    </button>
                    <button type="button" className='project-btn add-form__conf-btn'>
                        <span className='task-button__text'>Входящие</span>
                    </button>
                </div>
            </div>
            <div className='add-form__final-btns'>
                {
                    todoText ?
                        <button className='add-form__final-add'
                            onClick={handleAdd}> {editTodoId ? "Сохранить" : "Добавить задачу"}
                        </button>
                        : <button className='add-form__final-add'
                            disabled onClick={handleAdd}> {editTodoId ? "Сохранить" : "Добавить задачу"}
                        </button>
                }
                <button className='add-form__final-cancel' onClick={() => clearState()}>Отмена</button>
            </div>
            {isTermShown && <Term setTodoTerm={setTodoTerm} />}
        </div>
    );
}

export default AddForm;