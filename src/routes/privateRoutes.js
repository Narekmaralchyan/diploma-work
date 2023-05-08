import {Route, Routes} from "react-router-dom";
import ProfilePage from "../pages/private/profilePage";
import SLayout from "../styledComponents/SLayout";
import LeftMenu from "../components/leftMenu";

const PrivateRoutes = ()=>{
    console.log('log in')
    return(
        <SLayout>
            <LeftMenu/>
            <Routes>
                <Route path={''} element={<ProfilePage />} />
            </Routes>
        </SLayout>
    )
}
export default PrivateRoutes;