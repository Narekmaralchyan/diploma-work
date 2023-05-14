import {useDispatch, useSelector} from "react-redux";
import SProfilePage from "./SProfilePage";
import ProfilePageHeader from "./components/profilePageHeader";
import ProfilePageBody from "./components/profilePageBody";
import {useEffect} from "react";
import getUserInfo from "../../../utils/getUserInfo";
import {setUserData} from "../../../redux/slices/userSlice";

const ProfilePage = ()=>{
    const {userId} = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(()=>{
        getUserInfo(userId)
            .then(data=>{
                dispatch(setUserData(data))
            })
    },[userId])

    return(
        <SProfilePage>
            <ProfilePageHeader />
            <ProfilePageBody />
        </SProfilePage>
    )
}
export default ProfilePage;