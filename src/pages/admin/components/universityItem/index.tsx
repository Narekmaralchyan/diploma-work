import style from '../../style.module.scss'
import {IUniversity} from "../../../../types";
interface IProps{
    university:IUniversity
}
export default function UniversityItem({university}:IProps){
    return(
        <div className={style.universityItem} >
            <img className={style.universityLogo} src={university.imageURL || "https://metronome.am/no-image.png"} alt={university.name}/>
            <span>{university.name}</span>
        </div>
    )
}