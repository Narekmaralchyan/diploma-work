import SProfilePageBody from "./SProfilePageBody";
import {Button, Empty, Skeleton} from "antd";
import {useDispatch} from "react-redux";
import {openNewPostModal} from "../../../../../redux/slices/modalSlice";
import ProfilePagePosts from "./profilePagePosts";
import getPosts from "../../../../../utils/getPosts";
import {useEffect, useState} from "react";

const NoPostsBody = () => {
    const dispatch = useDispatch()
    const handleOpenModal = () => {
        dispatch(openNewPostModal())
    }
    return (
        <Empty
            style={{padding:'10px 0'}}
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{ height: 60 }}
            description={
                <span className='noPostsDescription'>
                            No Posts Yet
                    </span>
            }
        >
            <Button onClick={handleOpenModal} type="primary">Create New Post</Button>
        </Empty>
    )
}
const ProfilePageBody = ({id}) => {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        getPosts(id).then(posts=>{
            setPosts(posts)
        })
    },[])

    return(
        <SProfilePageBody>
            {
                id ?
                    posts.length
                        ?
                        <ProfilePagePosts posts={posts} />
                        :
                        <NoPostsBody />
                    :
                    <Skeleton active />
            }
        </SProfilePageBody>
    )
}

export default ProfilePageBody