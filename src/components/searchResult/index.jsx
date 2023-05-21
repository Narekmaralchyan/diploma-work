import SSearchResult from "./SSearchResult";
import {Avatar, Empty} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const SearchResult = ({users,closeModal})=>{
    const navigate = useNavigate()

    const goToProfile = (id) =>{
        navigate(`/${id}`)
        closeModal()
    }
    return(
        <SSearchResult>
            {
                users.length?
                    users.map(user => {
                        return <div className='userItem' onClick={()=>{goToProfile(user.id)}} key={user.id}>
                            <Avatar src={user.avatarUrl} icon={<UserOutlined />} />
                            <p>{user.name} {user.lastName}</p>
                        </div>
                    })
                    :
                    <div>
                        <Empty description='No users' />
                    </div>
            }
        </SSearchResult>
    )
}

export default SearchResult