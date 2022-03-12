import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "calendar",
    initialState: {
        term: null
    },
    reducers: {
        setTerm: (state, action) => {
            state.term = action.payload
        }
    }
});

export const { setTerm } = todoSlice.actions;
export default todoSlice.reducer;