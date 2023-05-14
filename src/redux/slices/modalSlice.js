import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenNewPostModal:false
}

const modalSlice = createSlice({
    name:'modalSlice',
    initialState,
    reducers:{
        openNewPostModal(state) {
            state.isOpenNewPostModal = true
        },
        closeNewPostModal(state) {
            state.isOpenNewPostModal = false
        }
    }
})

export const {openNewPostModal ,closeNewPostModal} = modalSlice.actions

export default modalSlice.reducer