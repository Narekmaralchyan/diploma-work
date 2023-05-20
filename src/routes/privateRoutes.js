import {Route, Routes} from "react-router-dom";
import ProfilePage from "../pages/private/profilePage";
import SLayout from "../styledComponents/SLayout";
import LeftMenu from "../components/leftMenu";
import NewPostModal from "../components/newPostModal";
import Feed from "../pages/private/feed";
import SearchModal from "../components/searchModal";

const PrivateRoutes = ()=>{
    return(
        <SLayout>
            <LeftMenu/>
                <Routes>
                    <Route path={''} element={<Feed />} />
                    <Route path={'/:id'} element={<ProfilePage/>} />
                </Routes>
            <NewPostModal/>
            <SearchModal />
        </SLayout>
    )
}
export default PrivateRoutes;