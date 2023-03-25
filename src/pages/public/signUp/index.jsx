import React, { useState } from 'react'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'


const SignUp = () => {
  const [state,setState] = useState({
    email:"",
    password:""
  })

  const handleInputs = (evnt) =>{
    setState(prev=>{
      return {
        ...prev,
        [evnt.target.name] : evnt.target.value
      }
    })
  }
  const handleSignUp = ()=>{
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then(res => {
        console.log(res, res);
      })
  }

  return (
    <div>
        <input type="email" name="email"   placeholder='email' onChange={handleInputs}/>
        <input type="password" name="password" placeholder='password' onChange={handleInputs}/>
        <button onClick={handleSignUp}>Sign up</button>
    </div>
  )
}

export default SignUp