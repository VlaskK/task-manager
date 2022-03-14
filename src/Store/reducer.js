import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isVisible: false
    },
    reducers: {
        setIsVisible : (state, action) => {
            state.isVisible = action.payload;
        }
    }
});

export const {setIsVisible} = menuSlice.actions;
export default menuSlice.reducer;