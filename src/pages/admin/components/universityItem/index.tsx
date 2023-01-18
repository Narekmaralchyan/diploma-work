import style from '../../style.module.scss'
import {IUniversity} from "../../../../types";
import {useAppDispatch} from "../../../../app/hooks";
import {selectUniversity} from "../../../../features/universitiesSlice/universitiesSlice";
interface IProps{
    university:IUniversity
}
export default function UniversityItem({university}:IProps){
    const dispatch = useAppDispatch()


    return(
        <div onClick={()=>{ dispatch(selectUniversity(university.id))}} className={style.universityItem} >
            <img className={style.universityLogo} src={university.imageURL || "https://metronome.am/no-image.png"} alt={university.name}/>
            <span>{university.name}</span>
        </div>
    )
}