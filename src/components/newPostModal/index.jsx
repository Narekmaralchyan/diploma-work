import SNewPostModal from "./SNewPostModal";
import {useDispatch, useSelector} from "react-redux";
import {closeNewPostModal} from "../../redux/slices/modalSlice";
import {Button, Form, Input, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {useState} from "react";
import {useForm} from "antd/es/form/Form";

const NewPostModal = ({open})=>{
    const [form] = useForm()
    const { isOpenNewPostModal } = useSelector(state => state.modals)
    const dispatch = useDispatch()
    const [file, setFile] = useState(null);

    const handleCloseModal = () => {
        dispatch(closeNewPostModal())
    }
    const handleConfirmAddNewPost = () => {
        console.log(form.getFieldsValue(['photo','description']))

    }
    const handleChange = ({fileList})=>{
        if(fileList.length){
            setFile(fileList[0])
        }
        else setFile(null)
    }

    return(
        <SNewPostModal
            open={isOpenNewPostModal}
            onCancel={handleCloseModal}
            title={'Add new post'}
            onOk={handleConfirmAddNewPost}
            centered
            // okButtonProps={{ disabled: !file }}
        >
            <Form form={form}>
                <Form.Item name='photo'>
                    <Upload
                        listType={'picture-circle'}
                        maxCount={1}
                        // onChange={handleChange}
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