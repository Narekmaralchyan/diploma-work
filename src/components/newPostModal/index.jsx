import SNewPostModal from "./SNewPostModal";
import {useDispatch, useSelector} from "react-redux";
import {closeNewPostModal} from "../../redux/slices/modalSlice";
import {Button, Form, Input, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {useForm} from "antd/es/form/Form";
import useAddNewPost from "../../hooks/useAddNewPost";

const NewPostModal = ()=>{
    const [form] = useForm()
    const { isOpenNewPostModal } = useSelector(state => state.modals)
    const dispatch = useDispatch()
    const {addNewPost,loading} = useAddNewPost()

    const handleCloseModal = () => {
        form.resetFields(['photo','description'])
        dispatch(closeNewPostModal())
    }
    const handleConfirmAddNewPost = async () => {
        await form.validateFields(['photo','description'])
        const post = form.getFieldsValue(['photo','description'])
        await addNewPost(post)
        handleCloseModal()
    }
    const handleChange = ({fileList})=>{
        if(fileList.length){
            form.setFieldValue('photo',fileList[0])
        }
        else form.resetFields(['photo'])
    }

    return(
        <SNewPostModal
            open={isOpenNewPostModal}
            onCancel={handleCloseModal}
            title={'Add new post'}
            onOk={handleConfirmAddNewPost}
            confirmLoading={loading}
            centered
        >
            <Form form={form} >
                <Form.Item name='photo' rules={[{
                    required:true,
                    message:'Photo required'
                }]}>
                    <Upload
                        listType={'picture-circle'}
                        maxCount={1}
                        onChange={handleChange}
                    >
                        <Button icon={<UploadOutlined />} size={'small'} >Upload</Button>
                    </Upload>
                </Form.Item>
               <Form.Item name='description'>
                   <Input placeholder='type description' />
               </Form.Item>
            </Form>
        </SNewPostModal>
    )
}

export default NewPostModal;