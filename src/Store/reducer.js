import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isVisible: false
    },
    reducers: {
        setIsVisible : (state) => {
            state.isVisible = !state.isVisible;
        }
    }
});

export const {setIsVisible} = menuSlice.actions;
export default menuSlice.reducer;