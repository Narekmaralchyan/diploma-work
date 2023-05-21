import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenNewPostModal:false,
    isOpenSearchModal:false,
    isOpenFollowingUsersModal:false,
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
        },
        openFollowingUsersModal(state,action){
            state.isOpenFollowingUsersModal = action.payload
        },
        closeFollowingUsersModal(state){
            state.isOpenFollowingUsersModal = false
        },
    }
})

export const {openNewPostModal ,
    closeNewPostModal,
    closeSearchModal,
    openSearchModal,
    openFollowingUsersModal,
    closeFollowingUsersModal
} = modalSlice.actions

export default modalSlice.reducer