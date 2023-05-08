import React, {useEffect, useState} from 'react';
import PrivateRoutes from "./routes/privateRoutes";
import PublicRoutes from "./routes/publicRoutes";
import {getAuth} from "firebase/auth";
import PageLoading from "./components/pageLoading";
import {useDispatch, useSelector} from "react-redux";
import {setUser} from "./redux/slices/userSlice";

function App() {
    const dispatch= useDispatch()
    const user = useSelector(state=>state.user)
    const [status,setStatus] = useState('loading')

    useEffect(()=>{
        const id = localStorage.getItem('user')
        if(id){
                dispatch(setUser(id))
                setStatus('logged')
            }
        else setStatus('logout')
    },[user])


    if(status === 'loading'){
        return <PageLoading size='large' />
    }
    else if(status === 'logged'){
        return <PrivateRoutes />
    }
    else  return <PublicRoutes />
}

export default App;
