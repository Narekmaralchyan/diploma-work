// import React , { ChangeEvent , FormEvent , useState } from "react";
// import Style from "../../pages/Login/style.module.scss";
// import { Link } from "react-router-dom";
// import buttonStyle from "../../styles/buttonStyle.module.scss";
//
// const [val,setVal] = useState("")
// function editVal (e){
//     setVal(e.target.value)
// }
//
// const [state,setState] = useState({
//     email:"",
//     name:"",
//     lastName:"",
//     faculty:"",
//     phone:"",
//     university:""
//     password:""
//
// });
// function updateState(e:ChangeEvent<HTMLInputElement>){
//     setState({
//         ...state,
//         [e.target.name]:e.target.value
//     })
// }
// function signUp(e:FormEvent<HTMLFormElement>){
//     e.preventDefault();
//
// }
// function foo(e){
//     console.log(e.target.value)
// }
//
//
// return (
//     <>
//
//         <div className={Style.loginPage}>
//             <form onSubmit={signUp} className={Style.loginForm}>
//                 <h1>Գրանցվել</h1>
//                 <div className={Style.inputs}>
//                     <input placeholder='Անուն' name='name' autoComplete="on" type='text' onChange={updateState}/>
//                     <input placeholder='Ազգանուն' name='lastName' autoComplete="on" type='text' onChange={updateState}/>
//                     <input placeholder='էլ-հասցե' name='email' autoComplete="on" type='email' onChange={updateState}/>
//                     <input list='state' placeholder='համալսարան'   id='states' type='text' />
//                     <select onChange={foo}>
//                         <option value="student">Դասախոս</option>
//                         <option value="lecturer">Ուսանող</option>
//                     </select>
//                     <input placeholder='Գաղտնաբառ' type='password' autoComplete="on" name='password' onChange={updateState}/>
//                 </div>
//                 <div className={Style.links}>
//                     <Link className={Style.link} to='/registration'>Եթե դեռ չունեք պռոֆիլ , գրանցվեք !!!</Link>
//                     <button disabled={state.password.length<6} className={buttonStyle.myButton}>ՄՈՒՏՔ</button>
//                 </div>
//             </form>
//         </div>
//     </>
// )

import React from "react";
import Style from './style.module.scss'
import ButtonStyle from '../../styles/buttonStyle.module.scss'

interface IProps {
    changeSignUp:()=>void
}

export default function RegistrLecturer ({changeSignUp}:IProps){

    function signUp(){

    }
    function updateState(){

    }

    return(

            <form onSubmit={signUp} className={Style.registrLecturer}>
                <h1>Գրանցվել որպես դասախոս</h1>
                <div className={Style.inputFields}>
                    <input placeholder='Անուն' name='name' autoComplete="on" type='text' onChange={updateState}/>
                    <input placeholder='Ազգանուն' name='lastName' autoComplete="on" type='text' onChange={updateState}/>
                    <input placeholder='էլ-հասցե' name='email' autoComplete="on" type='email' onChange={updateState}/>
                    <input placeholder='Գաղտնաբառ' type='password' autoComplete="on" name='password' onChange={updateState}/>
                    <input placeholder='հեռախոսահամար' name='phone' autoComplete="on" type='email' onChange={updateState}/>
                    <select onChange={updateState} name="university">
                        <option value="">համալսարան</option>
                        <option value="student">ԵՊՀ</option>
                        <option value="lecturer">ՀՊՏՀ</option>
                    </select>
                    <select onChange={updateState} name="faculty">
                        <option value="">ֆակուլտետ</option>
                        <option value="student">ԻԿՄ</option>
                        <option value="lecturer">ՖԻԶԻԿԱ</option>
                    </select>
                    <select onChange={updateState} name="chair">
                        <option value="">ամբիոն</option>
                        <option value="student">ՄԱԹԱՆԱԼԻԶ</option>
                        <option value="lecturer">ԾՐԱԳ</option>
                    </select>
                </div>
                <div className={Style.btns}>
                    <button  className={Style.signUpStudentBtn} onClick={changeSignUp}>Գրանցվել որպես ուսանող</button>
                    <button  className={ButtonStyle.myButton}>Գրանցվել</button>
                </div>
            </form>
    )
}