import {  notification } from 'antd';

const toast = (title,message)=> {

    notification.open({
        message:title,
        description:message
    })
}
export default toast