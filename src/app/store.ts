import { configureStore } from '@reduxjs/toolkit';
import userSlice from "../features/userSlice/userSlice";


export const store = configureStore({
    reducer: {
        userSlice: userSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;