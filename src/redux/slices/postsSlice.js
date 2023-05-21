import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const postsSlice = createSlice({
    name:'postsSlice',
    initialState,
    reducers:{
        setPosts(state,action) {
            return action.payload
        },
        addPost(state,action){
            return [action.payload,...state]
        },
        removePost(state,action) {
            return state.filter(post => post.id !== action.payload)
        }
    }
})

export const {
    setPosts,
    addPost,
    removePost
} = postsSlice.actions

export default postsSlice.reducer