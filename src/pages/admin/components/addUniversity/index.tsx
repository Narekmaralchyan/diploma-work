import style from './style.module.scss'
import React, {ChangeEvent, useEffect, useState} from "react";
import btnStyle from './../../../../styles/buttonStyle.module.scss'
import {addUniversityAPI, getAllUniversities} from "../../../../utils/universityAPI";
import {IUniversity} from "../../../../types";
import {useAppDispatch} from "../../../../app/hooks";
import {addUniversity} from "../../../../features/universitiesSlice/universitiesSlice";

interface IProps {
    closePopUp:()=>void
}
export default function AddUniversity({closePopUp}:IProps){
    const dispatch = useAppDispatch()
    const [readyToAdd,setReadyToAdd] = useState(false)
    const [state,setState] = useState({
        name:"",
        info:"",
    })

    useEffect(()=>{
        const isValid = Object.values(state).every(value => !!value)
        setReadyToAdd(isValid )
    },[state])

    function updateState(e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    function handleAddBtn(){
        const newUniversity:IUniversity = {
            name:state.name,
            info:state.info,
            id:state.name,
            imageURL:"",
            faculties:[],
        }
        addUniversityAPI(newUniversity)
            .then(res=>{
                dispatch(addUniversity(newUniversity))
                alert("համալսարանը հաջողությամբ ավելացվեց")
                closePopUp();
            })
            .catch(res=>{
                alert(res);
                closePopUp();
            })



    }
    return (
        <div className={style.popUpBackground} >
            <div className={style.popUp}>
                <h2>Ավելացնել համալսարան</h2>
                <form onSubmit={handleAddBtn} className={style.addForm}>
                    <input placeholder='անուն' name='name' autoComplete="on" type='name' onChange={updateState}/>
                    <textarea placeholder='համալսարանի մասին' name='info' autoComplete="on"  onChange={updateState}/>
                </form>
                <div className={style.buttons}>
                    <button className={btnStyle.myButton} onClick={closePopUp}>չեղարկել</button>
                    <button className={btnStyle.myButton} disabled={!readyToAdd} onClick={handleAddBtn}>ավելացնել</button>
                </div>
            </div>
        </div>
    )
}