
import style from './../../style.module.scss'
// @ts-ignore
import editIcon from "../../../../assets/editBtn.svg";
// @ts-ignore
import trashIcon from "../../../../assets/trash.svg";
// @ts-ignore
import checkIcon from '../../../../assets/checkIcon.svg'
// @ts-ignore

interface IProps {
    masters:string[]
}
export default function FacultyMasters({masters}:IProps) {

    return(
        <div className={style.facultySelectedOption}>
            {masters.map(department=><div className={style.listItems} key={department}>
                <span>{department}</span>
                <div className={style.manageButtons}>
                    <img src={editIcon} alt="edit"/>
                    <img src={trashIcon} alt="delete"/>
                </div>
            </div>)}
            <div className={style.addValue}>
                <input type="text" placeholder='ավելացնել'/>
                <button>ավելացնել</button>
            </div>
        </div>
    )
}