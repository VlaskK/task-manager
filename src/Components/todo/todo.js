import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setFormIsShown, setEditTodoId} from '../../Store/todo/reducer';
import { removeTodo } from '../../Store/todo/reducer';
import AddForm from '../add-form/add-form';
import { AiOutlineEdit } from "react-icons/ai";
import "./todo.scss"
const Todo = ({ todo }) => {

    const dispatch = useDispatch();
    const editTodoId = useSelector(state => state.todo.editTodoId)
    const completeTodo = (e) => {
        setTimeout(() => {
            e.stopPropagation();
            dispatch(removeTodo(todo.id));
        }, 500)
    }

    const editTodo = () => {
        dispatch(setFormIsShown(false));
        dispatch(setEditTodoId(todo.id));
    }

    return (
        <div className='todo'>
            {
                editTodoId === todo.id ? <AddForm when={todo.term} className="add-form"/>
                    : <div className='todo-item'>
                        <input type="radio" className='todo__checkbox' onChange={completeTodo}/>
                        <div className='todo__content'>
                            <div className='todo__spans'>
                                <div className='todo__text'>{todo.text}</div>
                                <div className='todo__desc'>{todo.desc}</div>
                            </div>
                            <AiOutlineEdit className='todo__edit' size={20} onClick={editTodo} />
                        </div>
                    </div>
            }
        </div>
    );
}

export default Todo;