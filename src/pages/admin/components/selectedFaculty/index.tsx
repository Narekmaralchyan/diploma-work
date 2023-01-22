
import style from './../../style.module.scss'
import {useAppSelector} from "../../../../app/hooks";
import React, {ChangeEvent, useEffect, useState} from "react";
import FacultyItem from "../facultyItem";
import FacultyStudents from "../facultyStudents";
import FacultyChairs from "../facultyChairs";
import FacultyBachelor from "../facultyBachelor";
import FacultyMasters from "../facultyMasters";
import FacultyLecturers from "../facultyLecturers";


const options = ["ուսանողներ","դասխոսներ","ամբիոններ","բակալավր","մագիստրատուրա"]

export default function SelectedFaculty(){
    const {selectedFaculty,selectedUniversity,universities} = useAppSelector(state => state.universities)
    const faculty = universities[selectedUniversity].faculties.find(faculty=>faculty.id ===selectedFaculty)
    const [body,setBody] = useState(<div></div>)

    const [state,setState] = useState("")

    useEffect(()=>{
        setState("")
    },[selectedUniversity,selectedFaculty])

    useEffect(()=>{
        switch (state){
            case "ուսանողներ":
                setBody(<FacultyStudents students={faculty!.students}/>); break;
            case "ամբիոններ":
                setBody(<FacultyChairs chairs={faculty!.chairs} />); break;
            case "բակալավր":
                setBody(<FacultyBachelor bachelors={faculty!.degrees["բակալավր"]}/>); break;
            case "մագիստրատուրա":
                setBody(<FacultyMasters masters={faculty!.degrees["բակալավր"]} />); break;
            case "դասխոսներ":
                setBody(<FacultyLecturers/>) ;break;
            default: setBody(<div></div>);
        }
    },[state])

    function changeState(e:ChangeEvent<HTMLSelectElement>){
        setState(e.target.value)
    }

    return(
        selectedFaculty ?
        <div className={style.selectedFaculty}>
            <div className={style.selectedFacultyHeader}>
                <h2>{universities[selectedUniversity].faculties.find(faculty=>faculty.id===selectedFaculty)!.name }</h2>
                <select onChange={changeState} value={state} name="field">
                    <option value="">ընտրեք դաշտը</option>
                    { options.map(option=><option key={option} value={option} >{option}</option>) }
                </select>
            </div>
            {body}
        </div>
            :
        <div></div>
    )
}