import style from './../../style.module.scss'
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {ChangeEvent, useEffect, useState} from "react";
import {editUniversityMainInfoAPI} from "../../../../utils/universityAPI";
import {editUniversity} from "../../../../features/universitiesSlice/universitiesSlice";



export default function MainInfo(){
    const [editMode,setEditMode] = useState(false)
    const {universities,selectedUniversity} = useAppSelector(state => state.universities)
    const university = universities[selectedUniversity]
    const dispatch = useAppDispatch()

    useEffect(()=>{
        setEditMode(false)

        setEditedData({
            name:university.name,
            info:university.info,
            imageURL:university.imageURL
        })
    },[selectedUniversity])

    const [editedData,setEditedData] = useState({
        name:university.name,
        info:university.info,
        imageURL:university.imageURL
    })

    function handleChangeInputValues(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setEditedData({
            ...editedData,
            [e.target.name]:e.target.value
        })
    }

    function toggleEditMode(){
        if(editMode){
            editUniversityMainInfoAPI(university.id,editedData.name,editedData.info,editedData.imageURL)
                .then((er)=>{
                    dispatch(editUniversity(editedData))
                    setEditMode(prevState => !prevState)
                })
                .catch(error=>{
                    alert(error)
                })
        }
        else setEditMode(prevState => !prevState)


    }


    return (
        selectedUniversity ?
            editMode ?
                <div className={style.mainInfo}>
                    <button className={style.editBtn} onClick={toggleEditMode}>հաստատել</button>
                    <input type="text" placeholder="տեղադրեք նկարի լինկը" name="imageURL" value={editedData.imageURL} onChange={handleChangeInputValues} />
                    <input type='text' className={style.changeInput}  name="name"  value={editedData.name} onChange={handleChangeInputValues} />
                    <textarea  className={style.changeInputInfo}  name="info" value={editedData.info} onChange={handleChangeInputValues} />
                </div>
                :
        <div className={style.mainInfo}>
            <button className={style.editBtn} onClick={toggleEditMode}>փոփոխել</button>
            <img src={university.imageURL} className={style.logo} alt="logo"/>
            <span className={style.title} contentEditable={editMode} > {university.name}</span>
            <span className={style.info} contentEditable={editMode} >{university.info}</span>
        </div>
            :
            <div></div>
    )
}