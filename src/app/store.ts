import { configureStore } from '@reduxjs/toolkit';
import userSlice from "../features/userSlice/userSlice";
import universitiesSlice from "../features/universitiesSlice/universitiesSlice";


export const store = configureStore({
    reducer: {
        userSlice: userSlice,
        universities:universitiesSlice
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;