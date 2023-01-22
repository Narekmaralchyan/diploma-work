import { createSlice , PayloadAction } from '@reduxjs/toolkit';

interface IUserState {
    status:"idle" | "loading" | "success" | "fail",
    id:string | null,
}

const initialState:IUserState = {
    status: 'idle',
    id: null
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logIn: (state, action:PayloadAction<string>) => {
            state.status = 'success';
            state.id = action.payload;
        },
        logOut:(state)=>{
            state.id=null;
        },
        setLoading: (state) => {
            state.status = 'loading';
        },
        setFail: (state) => {
            state.status = 'fail';
            state.id = null;
        }
    }
});

export const { logIn, setLoading, setFail,logOut } = userSlice.actions;

export default userSlice.reducer;