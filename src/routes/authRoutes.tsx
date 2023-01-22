import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../pages/home";
import AdminPage from "../pages/admin";
import {useAppSelector} from "../app/hooks";

export default function AuthRoutes(){
    const id = useAppSelector(state => state.userSlice.id)

    return (
        <Routes>
            <Route path="/" element={id==="admin"? <AdminPage/> : <Home/>} />
        </Routes>
    )
}