import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenNewPostModal:false,
    isOpenSearchModal:false
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
        },
        openSearchModal(state){
            state.isOpenSearchModal = true
        },
        closeSearchModal(state){
            state.isOpenSearchModal = false
        }
    }
})

export const {openNewPostModal ,closeNewPostModal,closeSearchModal,openSearchModal} = modalSlice.actions

export default modalSlice.reducer