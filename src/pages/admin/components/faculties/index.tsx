import style from './../../style.module.scss'
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {ChangeEvent, useState} from "react";
import {addFacultyAPI} from "../../../../utils/universityAPI";
import {addFaculty} from "../../../../features/universitiesSlice/universitiesSlice";
import FacultyItem from "../facultyItem";

export default function Faculties(){

    const {universities,selectedUniversity} = useAppSelector(state => state.universities)
    const university = universities[selectedUniversity]

    const [inputValue,setInputValue] = useState("")
    const [addMode,setAddMode] = useState(false)

    const dispatch = useAppDispatch()

    function changeAddMode(){
        setAddMode(prevState => !prevState)
    }
    function handleChangeInput(e:ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value)
    }
    function handleAddFaculty(){
        addFacultyAPI(university!.id,inputValue)
            .then(res=>{
                alert("Ֆակուլտետը հաջողությամբ ավելացավ")
                dispatch(addFaculty(res))
                setAddMode(false)
                setInputValue("")
            })
            .catch(error=>{
                alert(error)
                setAddMode(false)
            })
    }

    return(
        university ?
        <div className={style.faculties}>
            <div className={style.facultiesList}>
                <h3>Ֆակուլտետներ</h3>
                {university.faculties.map(faculty=>{
                    return <FacultyItem key={faculty.id} faculty={faculty}/>
                })}
                {addMode && <div className={style.addNewFaculty}>
                    <input type="text" value={inputValue} onChange={handleChangeInput}/>
                    <button onClick={handleAddFaculty}>Ավելացնել</button>
                </div>}
                <button onClick={changeAddMode}>{addMode?"չեղարկել":"Ավելացնել"}</button>
            </div>
        </div>
            :
            <div></div>
    )
}