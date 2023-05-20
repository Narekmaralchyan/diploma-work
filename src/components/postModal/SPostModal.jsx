import styled from "styled-components";
import {Modal} from "antd";

const SPostModal = styled(Modal)`
  .ant-modal-content {
    width: 800px;
    padding: 30px;
    background-color: rgb(0, 21, 41);
    right: 50%;
    height: 600px;
  }

  .ant-modal-close {
    top: 0px;
    inset-inline-end: 0px;
    background-color: black;
    color: white;
  }

  .ant-modal-body {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
     .post {
        width: 100%;
       display: flex;
       gap: 5px;
       height: 90%;
     }
    .likes {
      height: 10%;
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 16px;
      color: white;
    }
  }

  .postImage {
    width: 60%;
  }

  .postInfo {
    border: 1px solid white;
    border-radius: 5px;
    width: 40%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;

    .authorInfo {
      padding: 5px;
      display: flex;
      gap: 5px;
      align-items: center;
      height: 10%;
  
      .ant-typography {
        margin-bottom: 0;
        display: flex;
        align-items: center;
        color: white;
      }

    }

    .comments {
      padding: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 5px;
      height: 90%;

      .commentsBlock {
        display: flex;
        flex-direction: column;
        gap: 5px;
        height: 93%;
        overflow-y: scroll;
      }

      .singleComment {
        color: white;
        border: 1px solid grey;
        border-radius: 5px;
        padding: 2px;
        background-color: #363535;

        .commentAuthor {
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .commentText {
          padding: 2px;
          border: 1px solid #535353;
        }
      }
    }

    .addComment {
      height: 7%;
      display: flex;
    }
  }
}

.ant-btn:disabled {
  background-color: lightgrey;
  color: black;
}
`
export default SPostModal;