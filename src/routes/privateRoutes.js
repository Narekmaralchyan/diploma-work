import {Route, Routes} from "react-router-dom";
import ProfilePage from "../pages/private/profilePage";
import SLayout from "../styledComponents/SLayout";
import LeftMenu from "../components/leftMenu";
import NewPostModal from "../components/newPostModal";

const PrivateRoutes = ()=>{
    return(
        <SLayout>
            <LeftMenu/>
            <Routes>
                <Route path={''} element={<ProfilePage />} />
            </Routes>
            <NewPostModal/>
        </SLayout>
    )
}
export default PrivateRoutes;