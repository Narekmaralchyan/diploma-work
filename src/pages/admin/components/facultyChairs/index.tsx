
import style from './../../style.module.scss'
// @ts-ignore
import editIcon from "../../../../assets/editBtn.svg";
// @ts-ignore
import trashIcon from "../../../../assets/trash.svg";
// @ts-ignore
import checkIcon from '../../../../assets/checkIcon.svg'
// @ts-ignore

interface IProps {
    chairs:string[]
}
export default function FacultyChairs({chairs}:IProps) {

    return(
        <div className={style.facultySelectedOption}>
            {chairs.map(chair=><div className={style.listItems} key={chair}>
                <span>{chair}</span>
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