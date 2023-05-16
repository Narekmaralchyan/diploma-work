import styled from "styled-components";
import Sider from "antd/es/layout/Sider";
import {Button, Col, Row} from "antd";
import {getAuth,signOut} from "firebase/auth";
import {logoutUser} from "../../redux/slices/userSlice";
import {useDispatch} from "react-redux";
import {openNewPostModal} from "../../redux/slices/modalSlice";
import {PlusCircleOutlined} from "@ant-design/icons";

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
    const dispatch = useDispatch()
    const logout = async () =>{
        const auth = getAuth()
        await signOut(auth);
        dispatch(logoutUser())
    }
    const handleOpenNewPostModal = () => {
        dispatch(openNewPostModal())
    }

    return <SSider>
                <div className='menuItems'>
                    <Button>My Profile</Button>
                    <Button>Newsfeed</Button>
                    <Button>My Photos</Button>
                    <Button>My Follows</Button>
                    <Button>My Followers</Button>
                    <Button icon={<PlusCircleOutlined />} onClick={handleOpenNewPostModal} type={'primary'}>Add New Post</Button>
                </div>
                <div className='menuItems'>
                    <Button onClick={logout} type={'primary'} >Logout</Button>
                </div>
    </SSider>
}

export default LeftMenu;