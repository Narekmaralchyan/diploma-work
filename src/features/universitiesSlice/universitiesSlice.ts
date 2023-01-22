import {createSlice, Draft, PayloadAction} from '@reduxjs/toolkit';
import {IFaculty, IUniversity} from "../../types";
import {strictEqual} from "assert";

interface IState {
    universities:Record<string, IUniversity>
    selectedUniversity:string,
    selectedFaculty:string
}

const initialState:IState = {
    universities:{},
    selectedUniversity:"",
    selectedFaculty:""
}

const universitiesSlice = createSlice({
    name: 'universitiesSlice',
    initialState,
    reducers: {
        setUniversities:(state,action:PayloadAction<IUniversity[]>)=>{
            action.payload.forEach(university=>{
                state.universities[university.id] = university
            })
        },
        addUniversity:(state,action:PayloadAction<IUniversity>)=>{
            state.universities[action.payload.id] = action.payload
        },
        selectUniversity:(state,action:PayloadAction<string>)=>{
            state.selectedUniversity = action.payload;
            state.selectedFaculty = ""
        },
        addFaculty:(state,action:PayloadAction<IFaculty>)=>{
            state.universities[state.selectedUniversity].faculties.push(action.payload)
        },
        editFacultyName:(state,action:PayloadAction<{oldName:string,newName:string}>)=>{
            const faculty = state.universities[state.selectedUniversity].faculties.find(faculty=>faculty.name === action.payload.oldName)
            faculty!.name = action.payload.newName
        },
        deleteFaculty:(state,action:PayloadAction<string>)=>{
            state.universities[state.selectedUniversity].faculties = state.universities[state.selectedUniversity].faculties.filter(faculty=>faculty.id !== action.payload)
        },
        selectFaculty:(state,action:PayloadAction<string>)=>{
            state.selectedFaculty = action.payload
        },
        editUniversity:(state,action:PayloadAction<{name:string,info:string,imageURL:string}>)=>{
            const {name,info,imageURL} = action.payload
            state.universities[state.selectedUniversity] = {
                ... state.universities[state.selectedUniversity],
                name,
                info,
                imageURL
            }
        }

    }
});

export const { setUniversities,selectUniversity,addUniversity,addFaculty,editFacultyName,deleteFaculty,selectFaculty,editUniversity} = universitiesSlice.actions;

export default universitiesSlice.reducer;