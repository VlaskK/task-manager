import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        formIsShown: false,
        termIsShown: false,
        editTodoId: null,
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        editTodo: (state, action) => {
            state.todos = state.todos.map(todo => (todo.id === action.payload.id) ? (todo = action.payload) : todo) 
        },
        setFormIsShown: (state, action) => {
            state.formIsShown = action.payload
        },
        setTermIsShown: (state, action) => {
            state.termIsShown = action.payload
        },
        setEditTodoId: (state, action) => {
            state.editTodoId = action.payload
        }
    }
});

export const { addTodo, removeTodo, editTodo, setFormIsShown, setEditTodoId, setTermIsShown } = todoSlice.actions;
export default todoSlice.reducer;