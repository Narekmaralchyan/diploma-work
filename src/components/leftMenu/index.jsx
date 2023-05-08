import styled from "styled-components";
import Sider from "antd/es/layout/Sider";
import {Button, Col, Row} from "antd";
import {getAuth,signOut} from "firebase/auth";
import {logoutUser} from "../../redux/slices/userSlice";
import {useDispatch} from "react-redux";

const SSider = styled(Sider)`
  height: 100vh;
  background: red;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LeftMenu = ()=>{
    const dispatch = useDispatch()
    const logout = async () =>{
        const auth = getAuth()
        await signOut(auth);
        dispatch(logoutUser())
    }

    return <SSider>
        <Row gutter={['0','10px']}>
            <Col span={24}>
                <Button>My Profile</Button>
            </Col>
            <Col span={24}>
                <Button>New posts</Button>
            </Col>
            <Col span={24}>
                <Button>My Photos</Button>
            </Col>
            <Col span={24}>
                <Button>My Follows</Button>
            </Col>
            <Col span={24}>
                <Button>My Followers</Button>
            </Col>
            <Col span={24}>
                <Button onClick={logout} type={'primary'} >Logout</Button>
            </Col>
        </Row>
    </SSider>
}

export default LeftMenu;