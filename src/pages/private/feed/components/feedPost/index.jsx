import {Avatar} from "antd";
import {useEffect, useMemo, useState} from "react";
import {UserOutlined} from "@ant-design/icons";
import getUserInfo from "../../../../../utils/getUserInfo";
import {useDispatch, useSelector} from "react-redux";
import moment from "moment/moment";
import {useNavigate} from "react-router-dom";

const FeedPost = ({post,openPost})=>{
    const [authorData,setAuthorData] = useState(null)
    const navigate  = useNavigate()

    useEffect(()=>{
        getUserInfo(post.authorId).then(user=>{
            setAuthorData(user)
        })
    },[post])

    const goToProfile = ()=>{
        navigate(`${post.authorId}`)
    }

    return(
        <div className='post'>
            <div className='postHeader'>
                <div className='postAuthor' onClick={goToProfile}>
                    <Avatar src={authorData?.avatarUrl} icon={<UserOutlined />}/>
                    <p>{authorData?.name} {authorData?.lastName}</p>
                </div>
                <p>{moment(post.postTime).format('DD/MM/YYYY HH:MM')}</p>
            </div>
            <div className='postImage'>
                <img src={post?.imageUrl} alt="" onClick={()=>{openPost(post)}}/>
            </div>
            <div className='postDescription'>
                <p>{post?.description}</p>
            </div>
        </div>
    )
}
export default FeedPost