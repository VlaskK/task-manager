import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFormIsShown, setEditTodoId, editTodo } from '../../Store/todo/reducer';
import { nanoid } from 'nanoid';
import { addTodo } from '../../Store/todo/reducer';
import "./add-form.css";

const AddForm = ({ when }) => {

    const [todoText, setTodoText] = useState("");
    const [todoDesc, setTodoDesc] = useState("");
    const [todoTerm, setTodoTerm] = useState(null);
    const [todoProject, setTodoProject] = useState(null);

    const dispatch = useDispatch();
    const todo = useSelector(state => state.todo.todos);
    const editTodoId = useSelector(state => state.todo.editTodoId);

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


    return (
        <div className='add-form'>
            <h2 className='add-todo__when-text'>{when}</h2>
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
                    <button type="button" className="term-btn add-form__conf-btn">
                        <span className='task-button__text'>Срок</span>
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
        </div>
    );
}

export default AddForm;