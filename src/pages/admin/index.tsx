import style from './style.module.scss'
import {useEffect, useState} from "react";
import {getAllUniversities} from "../../utils/universityAPI";
import {IUniversity} from "../../types";
import UniversityItem from "./components/universityItem";
import btnStyle from './../../styles/buttonStyle.module.scss'
import AddUniversity from "./components/addUniversity";
import SelectedUniversity from "./components/selectedUniversity";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {setUniversities} from "../../features/universitiesSlice/universitiesSlice";
export default function AdminPage(){
    const universities = useAppSelector(state => state.universities.universities)
    const dispatch = useAppDispatch()
    const [showAddUniversityPopUp,setShowAddUniversityPopUp] = useState(false)

    useEffect(()=>{
        getAllUniversities()
            .then(data=>{
                dispatch(setUniversities(data))
            })
    },[])

    function handleShowPopUp(){
        setShowAddUniversityPopUp(prev=>!prev)
    }


    return(
        <div className={style.adminPage}>
            {showAddUniversityPopUp && <AddUniversity closePopUp={handleShowPopUp} />}
            <div className={style.universities}>
                {universities.map(university=><UniversityItem key={university.id} university={university} />)}
                <button className={btnStyle.myButton} onClick={handleShowPopUp}>Ավելացնել համալսարան</button>
            </div>
            <SelectedUniversity  />
        </div>
    )
}