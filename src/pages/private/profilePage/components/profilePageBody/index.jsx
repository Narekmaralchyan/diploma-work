import SProfilePageBody from "./SProfilePageBody";
import {Button, Empty, Skeleton} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {openNewPostModal} from "../../../../../redux/slices/modalSlice";
import ProfilePagePosts from "./profilePagePosts";
import getPosts from "../../../../../utils/getPosts";
import {useEffect, useMemo} from "react";
import {setPosts} from "../../../../../redux/slices/postsSlice";

const NoPostsBody = ({isMyProfile}) => {
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
            {isMyProfile && <Button onClick={handleOpenModal} type="primary">Create New Post</Button>}
        </Empty>
    )
}
const ProfilePageBody = ({id}) => {
    const {userId} = useSelector(state=>state.user)
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch()
    const isMyProfile = useMemo(()=>id === userId,[id,userId])
    useEffect(()=>{
        getPosts(id).then(posts=>{
            dispatch(setPosts(posts))
        })
    },[id])

    return(
        <SProfilePageBody>
            {
                id ?
                    posts?.length
                        ?
                        <ProfilePagePosts posts={posts} />
                        :
                        <NoPostsBody isMyProfile={isMyProfile}/>
                    :
                    <Skeleton active />
            }
        </SProfilePageBody>
    )
}

export default ProfilePageBody