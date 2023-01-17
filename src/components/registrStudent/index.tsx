import React , { ChangeEvent , FormEvent , useEffect , useState } from "react";
import ButtonStyle from '../../styles/buttonStyle.module.scss'
import Style from './style.module.scss'
import { getAllUniversities , getUniversityByName } from "../../utils/universityAPI";

interface IProps {
    changeSignUp:()=>void
}
interface IData {
    universities:string[],
    faculties:string[],
    degrees:["բակալավր","մագիստրատուրա"] | []
    departments:string[]

}


export default function RegisterStudent ({changeSignUp}:IProps){
    const [readyToSignUp,setReadyToSignUp] = useState(false);
    const [inputData,setInputData] = useState({
        name:"",
        lastName:"",
        email:"",
        password:"",
        phone:"",
        university:"",
        faculty:"",
        degree:"",
        departments:"",
        admissionYear:""

    });
    const [data,setData] = useState<IData>({
        universities:[],
        faculties:[],
        degrees:[],
        departments:[]
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
                degrees:[],
                departments:[]
            })
            setInputData({
                ...inputData,
                faculty:"",
                degree:"",
                departments:""
            })
        }
    },[inputData.university])
    useEffect(()=>{
        if(inputData.university && inputData.faculty){
            setData({
                ...data,
                degrees:["բակալավր","մագիստրատուրա"]
            })
        }
        else{
            setData({
                ...data,
                degrees:[],
                departments:[]
            })
            setInputData({
                ...inputData,
                degree:"",
                departments:""
            })
        }
    },[inputData.university,inputData.faculty])
    useEffect(()=>{
        if(inputData.university && inputData.faculty && inputData.degree){
                getUniversityByName(inputData.university)
                .then(university=>{
                    const departments =  university.faculties.find(faculty=>faculty.name === inputData.faculty)!.degrees[inputData.degree as "բակալավր" | "մագիստրատուրա"]
                    setData({
                        ...data,
                        departments
                    })
                })
        }
        else{
            setData({
                ...data,
                departments:[]
            })
            setInputData({
                ...inputData,
                departments:""
            })
        }
    },[inputData.university,inputData.faculty,inputData.degree])
    function updateState(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        setInputData({
            ...inputData,
            [e.target.name]:e.target.value
        })
    }
    function signUp(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        console.log("inputData",inputData)
        // const newUser = {
        //     ...inputData,
        //     status:"lecturer",
        //     avatarURL:"",
        //     id:Math.random().toString(),
        //     isDean:false,
        //     isRector:false
        // }
        // console.log("newUser",newUser);
    }

    return(

        <form onSubmit={signUp} method='POST' className={Style.registerStudent}>
            <h1>Գրանցվել որպես ուսանող</h1>
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
                <select onChange={updateState} name="degree">
                    <option value="">աստիճան</option>
                    {data.degrees.map(degree=><option key={degree} value={degree}>{degree}</option>)}
                </select>
                <select onChange={updateState} name="department">
                    <option value="">բաժին</option>
                    {data.departments.map(department=><option key={department} value={department}>{department}</option>)}
                </select>
                <input type='number' onChange={updateState} name="admissionYear" placeholder='ընդունվելու տարեթիվ' />
            </div>
            <div className={Style.btn}>
                <button  className={Style.signUpStudentBtn} onClick={changeSignUp} >Գրանցվել որպես դասախոս</button>
                <button  className={ButtonStyle.myButton} disabled={!readyToSignUp}> Գրանցվել</button>
            </div>
        </form>
    )
}

