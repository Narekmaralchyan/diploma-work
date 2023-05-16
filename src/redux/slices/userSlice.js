import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userId : null,
    userData : null
}

const useSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        setUserId(state,action) {
            localStorage.setItem('user',action.payload)
            state.userId = action.payload ;
        },
        logoutUser(state){
            localStorage.clear();
            state.userId = null ;
            state.userData = null;
        }, 
        setUserData(state,action) {
            state.userData  = action.payload
        },
        addPost(state,action) {
            state.userData.posts = [action.payload,...(state.userData.posts || [])]
        }
    }
})

export const {setUserId , logoutUser,setUserData,addPost} = useSlice.actions

export default useSlice.reducer