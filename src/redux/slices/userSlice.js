import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name:"",
}

const useSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers:{
        setUSer(state,action) {
            state.name = action.payload ;
        },
        removeUser(state){
            state.name = "" ;
        }, 
    }
})

export const {setUSer , removeUser} = useSlice.actions

export default useSlice.reducer