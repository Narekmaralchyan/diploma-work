import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import getFeedData from "../../../utils/getFeedData";
import SFeed from "./SFeed";
import FeedPost from "./components/feedPost";
import PostModal from "../../../components/postModal";

const Feed = ( )=>{
    const {userId} = useSelector(state => state.user)
    const [feedData,setFeedData] = useState([])
    const [openedPost,setOpenedPost] = useState(null)
    useEffect(()=>{
        if(userId){
            getFeedData(userId).then(data=>{
                setFeedData(data)
            })
        }
    },[userId])

    const closePostModal = () => {
        setOpenedPost(null)
    }
    const openPostModal = (post) => {
        setOpenedPost(post)
    }
    return(
        <SFeed>
            <h1 className='title'>Newsfeed</h1>
            {
                feedData.map(post=>{
                    return <FeedPost post={post} openPost={openPostModal} key={post.id} />
                })
            }
            <PostModal postInfo={openedPost} closeModal={closePostModal} />
        </SFeed>
    )
}
export default Feed;