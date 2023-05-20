import SProfilePagePosts from "./SProfilePagePosts";
import {Col, Row} from "antd";
import PostModal from "../../../../../../components/postModal";
import {useState} from "react";
import SinglePost from "../../singlePost";

const ProfilePagePosts = ({posts}) => {
    const [openedPost,setOpenedPost] = useState(null)
    const handleCloseModal = () =>{
        setOpenedPost(false)
    }
    return(
        <SProfilePagePosts>
            <Row gutter={[5,5]}>
                {
                 posts.map(post=>{
                    return <SinglePost post={post} openPost={setOpenedPost} key={post.id} />
                })
            }
            </Row>
            <PostModal postInfo={openedPost} closeModal={handleCloseModal}  />
        </SProfilePagePosts>
    )
}
export default ProfilePagePosts;