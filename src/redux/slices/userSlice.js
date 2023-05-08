import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const useSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        setUser(state,action) {
            localStorage.setItem('user',action.payload)
            return action.payload ;
        },
        logoutUser(state){
            localStorage.clear();
            return null ;
        }, 
    }
})

export const {setUser , logoutUser} = useSlice.actions

export default useSlice.reducer