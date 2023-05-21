import styled from "styled-components";

const SFeed = styled.div`
  background-color: skyblue;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  overflow-y: scroll;

  .title {
    font-size: 36px;
  }

  .post {
    padding: 10px;
    width: 50%;
    min-height: 350px;
    border-radius: 20px;
    background-color: rgb(0, 21, 41);
    color: white;
    display: flex;
    flex-direction: column;
    gap: 5px;

    .postHeader {
      padding: 3px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10%;
      border-radius: 4px;
      .postAuthor{
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
      }
    }

    .postHeader:hover {
      background-color: #010125;
    }

    .postImage {
      cursor: pointer;
      display: flex;
      justify-content: center;
      height: 80%;
    }

    .postDescription {
      height: 10%;
    }
  }
`
export default SFeed