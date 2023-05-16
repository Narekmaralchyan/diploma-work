import SProfilePagePosts from "./SProfilePagePosts";
import {Col, Row} from "antd";

const ProfilePagePosts = ({posts}) => {

    return(
        <SProfilePagePosts>
            <Row gutter={[5,5]}>
                {
                posts.map(post=>{
                    return (
                      <Col span={8}>
                          <div className='singlePost' key={post.id} >
                              <img src={post.imageUrl} alt={post.description} className='postImage'/>
                          </div>
                      </Col>
                    )
                })
            }
            </Row>

        </SProfilePagePosts>
    )
}
export default ProfilePagePosts;