import React, {useEffect, useState} from 'react';
import PrivateRoutes from "./routes/privateRoutes";
import PublicRoutes from "./routes/publicRoutes";
import PageLoading from "./components/pageLoading";
import {useDispatch, useSelector} from "react-redux";
import {setUserData, setUserId} from "./redux/slices/userSlice";
import getUserInfo from "./utils/getUserInfo";

function App() {
    const dispatch= useDispatch()
    const {userId} = useSelector(state=>state.user)
    const [status,setStatus] = useState('loading')

    useEffect(()=>{
        const id = localStorage.getItem('user')
        if(id){
            dispatch(setUserId(id))
            getUserInfo(id)
                .then(userData=>{
                    dispatch(setUserData(userData))
                })
                setStatus('logged')
            }
        else setStatus('logout')
    },[dispatch, userId])


    if(status === 'loading'){
        return <PageLoading size='large' />
    }
    else if(status === 'logged'){
        return <PrivateRoutes />
    }
    else  return <PublicRoutes />
}

export default App;
