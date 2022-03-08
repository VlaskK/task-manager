import React from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { addTodo } from '../../Store/todo/reducer';
import AddBtn from '../add-btn/add-btn';

import "./add-todo.css"
const AddTodo = ({ when }) => {
    const [addClicked, setAddClicked] = useState(false);

    const [todoText, setTodoText] = useState("");
    const [todoDesc, setTodoDesc] = useState("");
    const [todoTerm, setTodoTerm] = useState(null);
    const [todoProject, setTodoProject] = useState(null);

    const dispatch = useDispatch();

    const clearState = () => {
        setTodoText("");
        setTodoDesc("");
        setTodoTerm(null);
        setTodoProject(null);
    }

    const handleAdd = () => {
        const newTodo = {
            text: todoText,
            desc: todoDesc,
            term: todoTerm,
            project: todoProject,
            id: nanoid(8)
        }
        console.log(newTodo);
        dispatch(addTodo(newTodo));
        setAddClicked(false);
        clearState();

    }

    return (
        <div className='add-todo'>
            {addClicked ?
                <div className='add-extended'>
                    <h2 className='add-todo__when-text'>{when}</h2>
                    <div className='add-extended__task-editor'>
                        <div className="add-extended__inputs">
                            <input type="text"
                                placeholder='пример., Встреча по поводу дня рождения'
                                className='add-extended__task-input'
                                value={todoText}
                                onChange={(e) => setTodoText(e.target.value)} />
                            <input type="text"
                                placeholder='Описание'
                                className='add-extended__task-input'
                                value={todoDesc}
                                onChange={(e) => setTodoDesc(e.target.value)} />
                        </div>

                        <div className="add-extended__conf-btns">
                            <button type="button" className="term-btn add-extended__conf-btn">
                                <span className='task-button__text'>Срок</span>
                            </button>
                            <button type="button" className='project-btn add-extended__conf-btn'>
                                <span className='task-button__text'>Входящие</span>
                            </button>
                        </div>
                    </div>

                    <div className='add-extended__final-btns'>
                        {todoText ? <button className='add-extended__final-add' onClick={handleAdd}>Добавить задачу</button>
                            : <button className='add-extended__final-add' disabled onClick={handleAdd}>Добавить задачу</button>}
                        <button className='add-extended__final-cancel' onClick={() => { setAddClicked(false); clearState(); }}>Отмена</button>
                    </div>
                </div>

                : <AddBtn handleClick={() => setAddClicked(true)} when={when}/>
                
                }
        </div>
    );
}

export default AddTodo;