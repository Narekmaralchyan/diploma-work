
import style from './../../style.module.scss'
import {useAppSelector} from "../../../../app/hooks";


export default function SelectedUniversity(){
    const {universities,selected} = useAppSelector(state => state.universities)
    const university = universities.find(universe=>universe.id === selected)


    return (
        university &&
        <div className={style.selectedUniversity}>
            {university.name}
        </div>
        ||
        <div className={style.selectedUniversity}></div>
    )
}