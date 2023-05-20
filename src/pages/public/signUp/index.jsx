import React, { useState } from 'react'
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import { getFirestore,doc ,setDoc} from "firebase/firestore";
import {useForm} from "antd/es/form/Form";
import {Button, Form, Input, Layout, Row} from "antd";
import Title from "antd/es/typography/Title";
import SForm from "../../../styledComponents/SForm";
import {Link} from "react-router-dom";
import {app} from "../../../configs/firebaseConfig";
import {useDispatch} from "react-redux";
import {setUserId} from "../../../redux/slices/userSlice";


const SignUp = () => {
  const [form] = useForm()
    const dispatch = useDispatch()
    const [loading,setLoading] = useState(false)
   const handleSignUpUser = async (values) => {
      setLoading(true)
        const auth =getAuth()
       const userData = await createUserWithEmailAndPassword(auth,values.email,values.password)
       const newUser = userData.user
        dispatch(setUserId(newUser.uid))

       const db = getFirestore(app)
       const docRef = doc(db,'users',newUser.uid)
       const userInfo = {
           name:values.name,
           lastName:values.lastName,
           email:values.email,
           id:newUser.uid,
           avatarUrl:null,
           posts:[],
           follows:[],
           followers:[]
       }
       await setDoc(docRef,userInfo)

   }

  return (
      <Layout style={{width:'100vw',height:'100vh',display:"flex",justifyContent:'center',alignItems:'center'}}>
        <Title>Sign Up!</Title>
        <SForm
            form={form}
            name="basic"
            labelCol={{
                 span: 8,
               }}
            wrapperCol={{
                 span: 16,
               }}
            onFinish={handleSignUpUser}
            autoComplete="off"
        >
        <Form.Item
          name='name'
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input placeholder={'name'}  />
        </Form.Item>
          <Form.Item
              name='lastName'
              rules={[
                {
                  required: true,
                  message: 'Please input your lastName!',
                },
              ]}
          >
            <Input placeholder={'lastName'}  />
          </Form.Item>
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
            <Button htmlType={'submit'} type={'primary'} loading={loading}>Sign Up!</Button>
            <Link to={'/'}>go to LogIn page</Link>
          </Row>
        </SForm>
      </Layout>
      )
}

export default SignUp