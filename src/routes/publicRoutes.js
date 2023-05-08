import {Route, Routes} from "react-router-dom";
import SignUp from "../pages/public/signUp";
import LogIn from "../pages/public/logIn";

const PublicRoutes = () => {
    return (<Routes>
        <Route path='' element={<LogIn />} />
        <Route path='/signup' element={<SignUp/>} />
    </Routes>)
}

export default PublicRoutes;