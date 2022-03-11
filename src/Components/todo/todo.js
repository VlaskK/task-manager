import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFormIsShown, setEditTodoId} from '../../Store/todo/reducer';
import { removeTodo } from '../../Store/todo/reducer';
import AddForm from '../add-form/add-form';
import { AiOutlineEdit } from "react-icons/ai";
import "./todo.css"
const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const editTodoId = useSelector(state => state.todo.editTodoId)
    const completeTodo = (e) => {
        e.stopPropagation();
        dispatch(removeTodo(todo.id));
    }

    const editTodo = () => {
        dispatch(setFormIsShown(false));
        dispatch(setEditTodoId(todo.id));
    }

    return (
        <div className='todo'>
            {
                editTodoId === todo.id ? <AddForm when={todo.term} />
                    : <div className='todo-item'>
                        <input type="radio" className='todo__checkbox' onChange={completeTodo} />
                        <div className='todo__content'>
                            <span className='todo__spans'>
                                <span className='todo__text'>{todo.text}</span>
                                <span className='todo__desc'><br /> {todo.desc}</span>
                            </span>
                            <AiOutlineEdit className='todo__edit' size={20} onClick={editTodo} />
                        </div>
                    </div>
            }
        </div>
    );
}

export default Todo;