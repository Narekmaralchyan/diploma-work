import style from "../../style.module.scss";
// @ts-ignore
import editIcon from "../../../../assets/editBtn.svg";
// @ts-ignore
import trashIcon from "../../../../assets/trash.svg";
// @ts-ignore
import checkIcon from '../../../../assets/checkIcon.svg'
// @ts-ignore
import cancelIcon from '../../../../assets/cancel.svg'
import {IFaculty} from "../../../../types";
import {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {deleteFaculty, editFacultyName, selectFaculty} from "../../../../features/universitiesSlice/universitiesSlice";
import {deleteFacultyAPI, editFacultyNameAPI} from "../../../../utils/universityAPI";

interface IProps {
    faculty:IFaculty
}


export default function FacultyItem({faculty}:IProps){
    const selectedUniversity = useAppSelector(state => state.universities.selectedUniversity)
    const [editMode,setEditMode] = useState(false)
    const [inputValue,setInputValue] = useState(faculty.name)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        setEditMode(false)
    },[faculty])

    function handleChangeInputValue(e:ChangeEvent<HTMLInputElement>){
        setInputValue(e.target.value)
    }
    function toggleEditMode(){
        setInputValue(faculty.name)
        setEditMode(prevState => !prevState)
    }
    function handleEditName(){
        editFacultyNameAPI(selectedUniversity,faculty.name,inputValue)
            .then(()=>{
                dispatch(editFacultyName({
                    oldName:faculty.name,
                    newName:inputValue
                }))
            })
            .catch(error=>{
                alert(error)
            })
    }
    function handleDeleteFaculty(){
        deleteFacultyAPI(selectedUniversity,faculty.id)
            .then(()=>{
                dispatch(deleteFaculty(faculty.id))
            })

    }
    function handleSelectFaculty(){
        dispatch(selectFaculty(faculty.id))
    }

    return(
        !editMode ?
        <div className={style.facultyItem} >
            <span  className={style.facultyName} onClick={handleSelectFaculty}>{faculty.name}</span>
            <div className={style.icons}>
                <img src={editIcon} alt="edit" className={style.icon} onClick={toggleEditMode}/>
                <img src={trashIcon} alt="remove" className={style.icon} onClick={handleDeleteFaculty}/>
            </div>
        </div>
            :
            <div className={style.facultyItem}>
                <input className={style.facultyNameInput} value={inputValue} onChange={handleChangeInputValue} type='text' />
                <div className={style.icons}>
                    <img src={checkIcon} alt="check" className={style.icon} onClick={handleEditName}/>
                    <img src={cancelIcon} alt="cancel" className={style.icon} onClick={toggleEditMode}/>
                </div>
            </div>

    )
}