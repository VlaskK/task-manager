import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
    name: "menu",
    initialState: {
        isVisible: false,
        whichPage: "Входящие"
    },
    reducers: {
        setIsVisible: (state, action) => {
            state.isVisible = action.payload;
        },
        setPage: (state, action) => {
            state.whichPage = action.payload;
        }
    }
});

export const { setIsVisible, setPage } = menuSlice.actions;
export default menuSlice.reducer;