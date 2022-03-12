import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./reducer";
import todoReducer from "./todo/reducer";
import calendarReducer from "./calendar/reducer";

const store = configureStore({
    reducer: {
        menu: menuReducer,
        todo: todoReducer,
        calendar: calendarReducer
    }
});

export default store;