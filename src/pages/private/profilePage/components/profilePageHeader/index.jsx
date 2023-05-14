import SProfilePageHeader from "./SProfilePageHeader";
import {Avatar, Skeleton} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {useSelector} from "react-redux";

const ProfilePageHeader = () => {
    const {userData} = useSelector(state => state.user)
    return(
        <SProfilePageHeader>
            {
                userData ?<>
                    <Avatar src={userData.avatarUrl} size={100} icon={<UserOutlined />} />
                    <div className='profileInfo'>
                        <h1>{userData.name} {userData.lastName}</h1>
                        <div className='profileFollows'>
                            <p>{userData.follows || 0} follows</p>
                            <p>{userData.followers || 0} followers</p>
                        </div>
                    </div>
                    </>
                :
                <Skeleton active avatar  />
            }
        </SProfilePageHeader>
    )
}
export default ProfilePageHeader;