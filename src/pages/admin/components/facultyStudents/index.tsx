
import style from './../../style.module.scss'
import {useEffect, useState} from "react";
import {getStudentsListAPI} from "../../../../utils/universityAPI";
import {IStudent} from "../../../../types";

interface IProps {
    students:string[]
}
export default function FacultyStudents({students}:IProps){

    const [studentsState,setStudentsState] = useState<IStudent[]>([])

    useEffect(()=>{
        if(students.length){
            getStudentsListAPI(students)
                .then(data=>{
                    setStudentsState(data)
                })
        }
    },[])

    return (
        <div className={style.facultyStudents}>
            {studentsState.map(student=><div key={student.id} className={style.studentItem}>{student.name} {student.lastName} -id- {student.id}</div>)}
        </div>
    )
}