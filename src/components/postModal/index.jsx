import {Avatar, Button, Input, Skeleton} from "antd";
import SPostModal from "./SPostModal";
import {useEffect, useMemo, useState} from "react";
import Paragraph from "antd/es/typography/Paragraph";
import {HeartFilled, UserOutlined} from "@ant-design/icons";
import moment from "moment";
import toast from "../toast";
import {useSelector} from "react-redux";
import { v4 as uuid } from 'uuid';
import getUserInfo from "../../utils/getUserInfo";
import PostComments from "../../pages/private/profilePage/components/postComments";
import addComment from "../../utils/addComment";
import likePost from "../../utils/likePost";
import getPost from "../../utils/getPost";

const PostModal = ({postInfo,closeModal}) =>{
    const [post,setPost] = useState(null)
    const [authorData,setAuthorData] = useState(null)
    const {userData} = useSelector(state=>state.user)
    const [inputValue,setInputValue] = useState('')

    const isLiked = useMemo(()=>{
        if(post && authorData){
            if(post.likes.includes(authorData.id)){
                return true
            }
            else return false
        }
    },[post,authorData])
    useEffect(()=>{
        if(post){
            getUserInfo(post.authorId).then(data=>{
                setAuthorData(data)
            })
        }
    },[post])
    useEffect(()=>{
        if(postInfo)
        {
            getPost(postInfo.authorId,postInfo.id).then(post=>{
                setPost(post)
            })
        }
    },[postInfo])
    const handleAddComment = async () => {
        const comment = {
            text:inputValue,
            id:uuid(),
            authorId:userData?.id,
            authorName:`${userData?.name} ${userData?.lastName}`,
            authorAvatar:userData?.avatarUrl
        }
        addComment(comment,post).then((newPost)=>{
            toast('Comment','Comment added successfully')
            setPost(newPost)
            setInputValue('')
        }).catch(()=>{
                toast('Comment','Something went wrong! Try again!')
            })

    }
    const handleLikePost = async () => {
        likePost(isLiked,userData.id,post).then(newPost=>{
            setPost(newPost)
        })
    }
    const handelCancelModal = ()=>{
        closeModal();
        setPost(null)
    }
    return(
        <SPostModal
            open={postInfo}
            onCancel={handelCancelModal}
            centered
            footer={null}
        >
           <div className='post'>
               <img src={post?.imageUrl} alt={post?.description} className={'postImage'}/>
               <div className='postInfo'>
                   {
                       (authorData && post) ?
                           <div className='authorInfo'>
                               <Avatar src={authorData.avatarUrl} alt='avatar' icon={<UserOutlined/>}/>
                               <Paragraph>{authorData.name} {authorData.lastName}</Paragraph>
                               <Paragraph className={'postTime'}>-{moment(post.postTime).format('DD/MM/YYYY')}</Paragraph>
                           </div>
                           :
                           <div className='authorInfo'>
                               <Skeleton.Avatar active/>
                               <Skeleton.Input active />
                           </div>
                   }
                   <div className='comments'>
                       <PostComments post={post} closeModal={closeModal} />
                       <div className='addComment'>
                           <Input placeholder='Add new comment' value={inputValue}  onChange={(e)=>{
                               setInputValue(e.target.value)}} />
                           <Button disabled={!inputValue} type='primary' onClick={handleAddComment}>Add</Button>
                       </div>
                   </div>
               </div>
           </div>
            <div className='likes'>
                <HeartFilled style={{color:`${isLiked?'red':'white'}`,fontSize:'36px'}} onClick={handleLikePost}/>
                {post?.likes?.length || 0} likes
            </div>
        </SPostModal>
    )
}

export default PostModal;