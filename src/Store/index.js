import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducer";
import todoReducer from "./todo/reducer";

const store = configureStore({
    reducer: {
        menu: menuReducer,
        todo: todoReducer
    }
});

export default store;