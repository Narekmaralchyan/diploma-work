import {useDispatch, useSelector} from "react-redux";
import {getAuth,signOut} from "firebase/auth";
import {logoutUser} from "../../../redux/slices/userSlice";
import {useEffect, useState} from "react";
import getUserInfo from "../../../utils/getUserInfo.js";
import {Layout, Skeleton} from "antd";
import LeftMenu from "../../../components/leftMenu";
import SLayout from "../../../styledComponents/SLayout";
import {Header} from "antd/es/layout/layout";
import Title from "antd/es/typography/Title";
import Avatar from "antd/es/avatar/avatar";
import SkeletonAvatar from "antd/es/skeleton/Avatar";

const ProfilePage = ()=>{
    const userId = useSelector(state => state.user)
    const [userData,setUserData] = useState(null)
    const dispatch = useDispatch()

    useEffect(()=>{
        getUserInfo(userId)
            .then(data=>{
                setUserData(data)
            })
    },[])

    return(
        <SLayout>
                <h1>hello</h1>
        </SLayout>
    )
}
export default ProfilePage;