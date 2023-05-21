import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import modalReducer from "../slices/modalSlice"
import postsReducer from "../slices/postsSlice"
const store = configureStore({
    reducer: {
        user:userReducer,
        modals:modalReducer,
        posts:postsReducer
    }
})

export default store