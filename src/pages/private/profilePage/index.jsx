import SProfilePage from "./SProfilePage";
import ProfilePageHeader from "./components/profilePageHeader";
import ProfilePageBody from "./components/profilePageBody";
import {useParams} from "react-router-dom";

const ProfilePage = ()=>{
    let { id } = useParams();
    return(
        <SProfilePage>
            <ProfilePageHeader id={id} />
            <ProfilePageBody id={id} />
        </SProfilePage>
    )
}
export default ProfilePage;