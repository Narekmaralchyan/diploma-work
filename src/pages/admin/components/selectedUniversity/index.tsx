
import style from './../../style.module.scss'
import {useAppSelector} from "../../../../app/hooks";
import MainInfo from "../mainInfo";
import Faculties from "../faculties";
import SelectedFaculty from "../selectedFaculty";


export default function SelectedUniversity(){
    const selectedUniversity = useAppSelector(state => state.universities.selectedUniversity)


    return (
        selectedUniversity &&
        <div className={style.selectedUniversity}>
            <MainInfo />
            <Faculties />
            <SelectedFaculty />
        </div>
        ||
        <div className={style.selectedUniversity}>Ընտրեք համալսարան</div>
    )
}