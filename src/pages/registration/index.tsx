import React , { useState } from "react";
import Style from './style.module.scss'
import RegistrStudent from "../../components/registrStudent";
import RegistrLecturer from "../../components/registrLecturer";
export default function Registration() {
    const [signUp,setSignUp] = useState(true)

    function changeSignUp(){
        setSignUp(prev=> !prev)
    }

    return (
            <div className={Style.registrationPage}>
                <div className={Style.registr}>
                    { (signUp && <RegistrLecturer changeSignUp={changeSignUp} />) || <RegistrStudent /> }
                </div>
            </div>
    )
}