import React from "react";
import { Route , Routes } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/registration";

export default function UnAuthRoutes() {
  return (
   <Routes>
        <Route path="/" element={<Login />} />
       <Route path='/registration' element={<Registration />} />
   </Routes>
  );
}