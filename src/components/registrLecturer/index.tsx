import React , { ChangeEvent , FormEvent , useEffect , useState } from "react";
import Style from './style.module.scss'
import ButtonStyle from '../../styles/buttonStyle.module.scss'
import { getAllUniversities , getUniversityByName } from "../../utils/universityAPI";

interface IProps {
    changeSignUp:()=>void
}
interface IData {
    universities:string[],
    faculties:string[],
    chairs:string[]

}

export default function RegisterLecturer ({changeSignUp}:IProps){

    const [readyToSignUp,setReadyToSignUp] = useState(false);
    const [inputData,setInputData] = useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
        phone:"",
        university:"",
        faculty:"",
        chair:"",
    });
    const [data,setData] = useState<IData>({
        universities:[],
        faculties:[],
        chairs:[]
    })

    useEffect(()=>{
        const isValid = Object.values(inputData).every(value => !!value)
        setReadyToSignUp(isValid && inputData.password.length>5 && inputData.phone.length===9)
    },[inputData])

    useEffect(()=>{
            getAllUniversities()
            .then(universities=>{
                setData({
                    ...data,
                    universities:universities.map(university=>university.name)
                })
            })
    },[])

    useEffect(()=>{
        if(inputData.university){
                getUniversityByName(inputData.university)
                .then(university=>{
                    setData({
                        ...data,
                        faculties:university.faculties.map(faculty=>faculty.name)
                    })
                })
        }
        else {
            setData({
                ...data,
                faculties:[],
                chairs:[]
            })
            setInputData({
                ...inputData,
                faculty:"",
                chair:"",
            })
        }

    },[inputData.university])

    useEffect(()=>{
        if(inputData.university && inputData.faculty){
            getUniversityByName(inputData.university)
                .then(university=>{
                   setData({
                       ...data,
                       chairs: university.faculties.find(faculty=>faculty.name===inputData.faculty)!.chairs
                   })
                })

        }
        else {
            setData({
                ...data,
                chairs:[]
            })
            setInputData({
                ...inputData,
                chair:"",
            })
        }

    },[inputData.faculty])

    function signUp(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log("inputData",inputData)
        const newUser = {
            ...inputData,
            status:"lecturer",
            avatarURL:"",
            id:Math.random().toString(),
            isDean:false,
            isRector:false
        }
        console.log("newUser",newUser);
    }
    function updateState(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        setInputData({
            ...inputData,
            [e.target.name]:e.target.value
        })
    }

    return(

            <form onSubmit={signUp} method='POST' className={Style.registerLecturer}>
                <h1>Գրանցվել որպես դասախոս</h1>
                <div className={Style.inputFields}>
                    <input placeholder='Անուն' name='name' autoComplete="on" type='text' onChange={updateState}/>
                    <input placeholder='Ազգանուն' name='lastName' autoComplete="on" type='text' onChange={updateState}/>
                    <input placeholder='էլ-հասցե' name='email' autoComplete="on" type='email' onChange={updateState}/>
                    <input placeholder='Գաղտնաբառ' type='password' autoComplete="on" name='password' onChange={updateState}/>
                    <input placeholder='հեռախոսահամար(077112233)' name='phone' autoComplete="on" type='number'  onChange={updateState}/>
                    <select onChange={updateState} name="university">
                        <option value="">համալսարան</option>
                        {data.universities.map(university=><option key={university} value={university}>{university}</option>)}
                    </select>
                    <select onChange={updateState} name="faculty">
                        <option value="">ֆակուլտետ</option>
                        {data.faculties.map(faculty=><option key={faculty} value={faculty}>{faculty}</option>)}
                    </select>
                    <select onChange={updateState} name="chair">
                        <option value="">ամբիոն</option>
                        {data.chairs.map(chair=><option key={chair} value={chair}>{chair}</option>)}
                    </select>
                </div>
                <div className={Style.btn}>
                    <button  className={Style.signUpStudentBtn} onClick={changeSignUp}>Գրանցվել որպես ուսանող</button>
                    <button  className={ButtonStyle.myButton} disabled={!readyToSignUp}> Գրանցվել</button>
                </div>
            </form>
    )
}