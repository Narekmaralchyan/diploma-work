import style from './style.module.scss'
import React, {ChangeEvent, useEffect, useState} from "react";
import btnStyle from './../../../../styles/buttonStyle.module.scss'
import {getAllUniversities} from "../../../../utils/universityAPI";
export default function AddUniversity(){

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

    function addUniversity(){
        getAllUniversities()
            .then(universities=>{
                const exist = universities.map(university=>university.name).includes(state.name)
                if(!exist){
                    const newUniversity = {
                        name:state.name,
                        info:state.info,
                        id:state.name,
                        faculties:[],
                    }
                    fetch("http://localhost:3005/universities",{
                        method:"POST",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body:JSON.stringify(newUniversity)
                    })

                }
                else throw new Error()
            })
            .then(res=>{
            console.log("added")
        })
            .catch(err=>{
                console.log("error")
            })

    }
    return (
        <div className={style.popUpBackground} >
            <div className={style.popUp}>
                <h2>Ավելացնել համալսարան</h2>
                <form onSubmit={addUniversity} className={style.addForm}>
                    <input placeholder='անուն' name='name' autoComplete="on" type='name' onChange={updateState}/>
                    <textarea placeholder='համալսարանի մասին' name='info' autoComplete="on"  onChange={updateState}/>
                </form>
                <div className={style.buttons}>
                    <button className={btnStyle.myButton}>չեղարկել</button>
                    <button className={btnStyle.myButton} disabled={!readyToAdd} onClick={addUniversity}>ավելացնել</button>
                </div>
            </div>
        </div>
    )
}