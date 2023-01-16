import { configureStore } from "@reduxjs/toolkit";
import countReducer from './counter-slice';
import { type } from "os";

const store = configureStore({
    reducer: {
        counter: countReducer
    }
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;