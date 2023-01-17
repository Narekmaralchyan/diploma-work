import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "../pages/home";
import AdminPage from "../pages/admin";

export default function AuthRoutes(){
    return (
        <Routes>
            <Route path="/" element={<AdminPage/>} />
        </Routes>
    )
}