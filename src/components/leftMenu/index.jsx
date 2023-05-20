import styled from "styled-components";
import Sider from "antd/es/layout/Sider";
import {Button} from "antd";
import {getAuth,signOut} from "firebase/auth";
import {logoutUser} from "../../redux/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";
import {openNewPostModal, openSearchModal} from "../../redux/slices/modalSlice";
import {
    CoffeeOutlined,
    IdcardOutlined, MessageOutlined,
    PlusCircleOutlined,
    SearchOutlined,
    SmileOutlined
} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const SSider = styled(Sider)`
  height: 100vh;
  background: red;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .ant-layout-sider-children{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px;
  }
  .menuItems{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`
const LeftMenu = ()=>{
    const {userId} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = async () =>{
        const auth = getAuth()
        await signOut(auth);
        dispatch(logoutUser())
        navigate('')
    }
    const handleOpenNewPostModal = () => {
        dispatch(openNewPostModal())
    }
    const goMyProfile = ()=>{
        navigate(`/${userId}`)
    }
    const handleOpenSearchModal = ()=>{
        dispatch(openSearchModal())
    }

    return <SSider>
                <div className='menuItems'>
                    <Button onClick={goMyProfile} icon={<IdcardOutlined />}>My Profile</Button>
                    <Button icon={<CoffeeOutlined />}>Newsfeed</Button>
                    <Button icon={<SearchOutlined/>} onClick={handleOpenSearchModal}>Search</Button>
                    <Button icon={<MessageOutlined/>}>Messages</Button>
                    <Button icon={<SmileOutlined />}>My Follows</Button>
                    <Button icon={<SmileOutlined />}>My Followers</Button>
                    <Button icon={<PlusCircleOutlined />} onClick={handleOpenNewPostModal} type={'primary'}>Add New Post</Button>
                </div>
                <div className='menuItems'>
                    <Button onClick={logout} type={'primary'} >Logout</Button>
                </div>
    </SSider>
}

export default LeftMenu;