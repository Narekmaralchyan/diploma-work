import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {IUniversity} from "../../types";

interface IState {
    universities:IUniversity[],
    selected:string,
}

const initialState:IState = {
    universities:[],
    selected:""
}

const universitiesSlice = createSlice({
    name: 'universitiesSlice',
    initialState,
    reducers: {
        setUniversities:(state,action:PayloadAction<IUniversity[]>)=>{
          state.universities = action.payload
        },
        addUniversity:(state,action:PayloadAction<IUniversity>)=>{
            state.universities = [...state.universities,action.payload]
        },
        selectUniversity:(state,action:PayloadAction<string>)=>{
            state.selected = action.payload
        }

    }
});

export const { setUniversities,selectUniversity,addUniversity} = universitiesSlice.actions;

export default universitiesSlice.reducer;