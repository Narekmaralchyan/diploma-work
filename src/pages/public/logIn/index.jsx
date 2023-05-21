import {getAuth,signInWithEmailAndPassword} from "firebase/auth";
import {Button, Col, Form, Input, Layout, Row} from "antd";
import {useForm} from "antd/es/form/Form";
import {useDispatch} from "react-redux";
import { setUserId} from "../../../redux/slices/userSlice";
import Title from "antd/es/typography/Title";
import SForm from "../../../styledComponents/SForm";
import {useNavigate} from "react-router-dom";
import SLogin from "./SLogin";
import Globus from "./componets/Globus";

const LogIn = () => {
    const auth = getAuth()
    const dispatch = useDispatch()
    const [form] = useForm()
    const navigate = useNavigate()

    const navigateSignUp = ()=>{
        navigate('/signup')
    }
    const handleLoginUser = async (values) => {
        try {
            const data = await signInWithEmailAndPassword(auth,values.email,values.password)
            dispatch(setUserId(data.user.uid))
        }
        catch (e){
            console.log(e)
        }
    }

    return(
        <SLogin>
            <div className='loginContainer'>
                <Title>LOGIN!</Title>
                <SForm
                    form={form}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={handleLoginUser}
                    autoComplete="off"
                >
                    <Form.Item
                        name='email'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                            {
                                type:"email",
                                message:'Please input correct email address!'
                            }
                        ]}
                    >
                        <Input placeholder={'email'}  />
                    </Form.Item>
                    <Form.Item
                        name='password'
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder={'password'}/>
                    </Form.Item>
                    <Row justify={'space-between'}>
                        <Col >
                            <Form.Item>
                                <Button htmlType='submit' type='primary' onClick={handleLoginUser} >Log in</Button>
                            </Form.Item>
                        </Col>
                        <Col >
                            <Button onClick={navigateSignUp}>Sign Up</Button>
                        </Col>
                    </Row>
                </SForm>
            </div>
            <Globus />
        </SLogin>
    )
}

export default LogIn;