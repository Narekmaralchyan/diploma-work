import React , { ChangeEvent , FormEvent , useState } from "react";
import Style from './style.module.scss'
import { Link } from "react-router-dom";
import buttonStyle from './../../styles/buttonStyle.module.scss'
import { useAppDispatch , useAppSelector } from "../../app/hooks";
import Loading from "../../components/loading";
import { logIn , setFail , setLoading } from "../../features/userSlice/userSlice";
import {loginAPI} from "../../utils/universityAPI";
export default function Login(){
    const {status} = useAppSelector(state=>state.userSlice);
    const dispatch = useAppDispatch();
    const [state,setState] = useState({
        email:"",
        password:""
    });
    function updateState(e:ChangeEvent<HTMLInputElement>){
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    function login(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        dispatch(setLoading());
        loginAPI(state.email,state.password)
            .then( id =>{
                dispatch(logIn(id))
            })
            .catch(error=>{
                dispatch(setFail());
                alert(error)
            })
    }


    return (
        <>
            {status === 'loading' && <Loading/>}
            {status === 'fail' && alert("սխալ մուտքանուն կամ գաղտնաբառ")}
        <div className={Style.loginPage}>
            <form onSubmit={login} className={Style.loginForm}>
                <h1>Մուտք համակարգ</h1>
               <div className={Style.inputs}>
                   <input placeholder='էլ-հասցե' name='email' autoComplete="on" type='email' onChange={updateState}/>
                   <input placeholder='գաղտանաբառ' type='password' autoComplete="on" name='password' onChange={updateState}/>
               </div>
                <div className={Style.links}>
                    <Link className={Style.link} to='/registration'>Եթե դեռ չունեք պռոֆիլ , գրանցվեք !!!</Link>
                    <button disabled={state.password.length<6} className={buttonStyle.myButton}>ՄՈՒՏՔ</button>
                </div>
            </form>
        </div>
        </>
    )
}