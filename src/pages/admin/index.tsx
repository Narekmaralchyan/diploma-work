import style from './style.module.scss'
import {useEffect, useState} from "react";
import {getAllUniversities} from "../../utils/universityAPI";
import {IUniversity} from "../../types";
import UniversityItem from "./components/universityItem";
import btnStyle from './../../styles/buttonStyle.module.scss'
import AddUniversity from "./components/addUniversity";
export default function AdminPage(){
    const [universities,setUniversities] = useState([] as IUniversity[])

    useEffect(()=>{
        getAllUniversities()
            .then(data=>{
                setUniversities(data)
            })
    },[])

    return(
        <div className={style.adminPage}>
            <AddUniversity/>
            <div className={style.universities}>
                <>
                    {universities.map(university=><UniversityItem university={university}/>)}
                </>
                <button className={btnStyle.myButton}>Ավելացնել համալսարան</button>
            </div>
            <div className={style.selectedUniversity}>

            </div>
        </div>
    )
}