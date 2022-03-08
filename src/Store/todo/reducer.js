import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
        formIsShown: false, 
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        setFormIsShown: (state, action) => {
            state.formIsShown = action.payload
        }
    }
});

export const {addTodo, removeTodo, setFormIsShown} = todoSlice.actions;
export default todoSlice.reducer;