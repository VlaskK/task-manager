import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.map(todo => todo.id !== action.payload)
        },
        // editTodo: (state, action) => {
        //     state.todos = state.todos.map(todo => )
        // }
    }
});

export const {addTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;