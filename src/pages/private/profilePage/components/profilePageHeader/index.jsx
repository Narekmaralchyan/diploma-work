import SProfilePageHeader from "./SProfilePageHeader";
import {Avatar, Button, Skeleton} from "antd";
import { UserOutlined } from '@ant-design/icons';
import {useEffect, useMemo, useState} from "react";
import getUserInfo from "../../../../../utils/getUserInfo";
import {useSelector} from "react-redux";
import followUser from "../../../../../utils/followUser";

const ProfilePageHeader = ({id}) => {
    const { userId } = useSelector(state=>state.user)
    const [data,setData] = useState(null)
    const isMyProfile = useMemo(()=>id === userId,[id,userId])
    const isFollow = useMemo(()=>data?.followers.includes(userId),[data])
    useEffect(()=>{
        if(id ){
            getUserInfo(id)
                .then(data=>{
                    setData(data)
                })
        }
    },[id])

    const followUserToggle = ()=>{
        followUser(isFollow,userId,data).then((newData)=>{
            setData(newData)
        })
    }
    return(
        <SProfilePageHeader>
            {
                data ?<>
                    <Avatar src={data?.avatarUrl} size={100} icon={<UserOutlined />}  />
                    <div className='profileInfo'>
                        <h1>{data.name} {data.lastName}</h1>
                        <div className='profileFollows'>
                            <p>{data.follows.length || 0} follows</p>
                            <p>{data.followers.length || 0} followers</p>
                            { !isMyProfile ? <Button onClick={followUserToggle}>{isFollow ? 'Unfollow' : "Follow"}</Button> : null}
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