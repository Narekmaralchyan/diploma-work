import styled from "styled-components";
import {Modal} from "antd";

const SSearchModal = styled(Modal)`
 .ant-modal-close{
   top: 0;
   inset-inline-end:0;
 }
  .ant-modal-body{
    display: flex;
    flex-direction: column;
    gap: 5px;
    .searchResult{
      height: 400px;
      width: 100%;
      overflow-y: scroll;
      border: 1px solid grey;
    border-radius: 5px;
      padding: 5px;
    }
  }
`

export default SSearchModal;