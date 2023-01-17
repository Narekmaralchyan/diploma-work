import React, { useState } from "react";
import Style from './style.module.scss'
import RegisterStudent from "../../components/registrStudent";
import RegisterLecturer from "../../components/registrLecturer";

export default function Registration() {
    const [signUp, setSignUp] = useState(true)

    function changeSignUp() {
        setSignUp(prev => !prev)
    }

    return (
        <div className={Style.registrationPage}>
            <div className={Style.register}>
                {(signUp && <RegisterLecturer changeSignUp={changeSignUp} />) || <RegisterStudent changeSignUp={changeSignUp}/>}
            </div>
        </div>
    )
}