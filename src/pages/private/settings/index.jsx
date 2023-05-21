import SSettings from "./SSettings";
import {Avatar, Button, Form, Input, Upload} from "antd";
import { useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {UploadOutlined, UserOutlined} from "@ant-design/icons";
import {useForm} from "antd/es/form/Form";
import editUser from "../../../utils/editProfile";
import {setUserData} from "../../../redux/slices/userSlice";
const Settings = () => {
    const [form] = useForm()
    const {userData} = useSelector(state => state.user)
    const [editMode,setEditMode] = useState(false)
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()

    const toggleEditMode = () => {
        setEditMode(prevState => !prevState)
    }

    const handleChangePhoto = ({fileList})=>{
        if(fileList.length){
            form.setFieldValue('avatarUrl',fileList[0])
        }
        else form.resetFields(['avatarUrl'])
    }

    const saveEditing = async ()=>{
       try {
           setLoading(true)
           const values = await form.validateFields()
           editUser(userData.id,values).then(newData=>{
               dispatch(setUserData(newData))
               setLoading(false)
               setEditMode(false)
           })
       }
       catch (e){
           console.log(e)
       }
    }

    return(
        <SSettings>
            <h1 className='title'>Settings</h1>
            <Button onClick={toggleEditMode} loading={loading}>{ editMode ? 'Cancel' : 'Edit' }</Button>
           <Form form={form}>
               <Form.Item
                   label='Name'
                   name='name'
                   initialValue={userData?.name}
                   rules={[{
                       required:true,
                       message:'Name is required!'
                   }]}
               >
                    <Input  disabled={!editMode}/>
               </Form.Item>
               <Form.Item
                   label='Lastname'
                   name='lastName'
                   initialValue={userData?.lastName}
                   rules={[{
                       required:true,
                       message:'Lastname is required!'
                   }]}
               >
                   <Input  disabled={!editMode}/>
               </Form.Item>
               <Form.Item
                   label={'Avatar'}
                   className='avatarForm'
                   name='avatarUrl'
                   initialValue={userData?.avatarUrl}
               >
                   {
                       editMode ?
                           <Upload
                               listType={'picture-circle'}
                               maxCount={1}
                               onChange={handleChangePhoto}
                           >
                               <Button icon={<UploadOutlined />} size={'small'} >Upload</Button>
                           </Upload>
                           :
                           <Avatar src={userData?.avatarUrl} icon={<UserOutlined />} size={100} />
                   }
               </Form.Item>
               {
                   editMode && <Form.Item>
                       <Button onClick={saveEditing} loading={loading} type='primary'>Save</Button>
                   </Form.Item>
               }
           </Form>
        </SSettings>
    )
}
export default Settings