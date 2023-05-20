import {Avatar, Empty} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const PostComments = ({post,closeModal})=>{
    const navigate = useNavigate()
    const goToAuthorPage = (id)=>{
        navigate(`/${id}`)
        closeModal()
    }
    return(
        <>
            {
                post && (
                    post.comments.length ?
                        <div className='commentsBlock'>
                            {
                                post.comments.map(comment=>{
                                    return(
                                        <div key={comment.id} className='singleComment' onClick={()=>{goToAuthorPage(comment.authorId)}}>
                                            <div className='commentAuthor'>
                                                <Avatar src={comment?.authorAvatar} icon={<UserOutlined />}/>
                                                <p>{comment.authorName}</p>
                                            </div>
                                            <p className='commentText'>{comment.text}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div className='commentsBlock'>
                            <Empty description='No comments'/>
                        </div>
                )
            }
        </>
    )
}

export default PostComments