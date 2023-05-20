import {Col} from "antd";

const SinglePost = ({post,openPost}) => {
    return(
        <Col span={8} onClick={()=>{openPost(post)}} >
            <div className='singlePost' key={post.id} >
                <img src={post.imageUrl} alt={post.description} className='postImage'/>
            </div>
        </Col>
    )
}
export default SinglePost