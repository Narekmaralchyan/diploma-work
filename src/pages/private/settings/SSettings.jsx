import styled from "styled-components";

const SSettings = styled.div`
  width: 100%;
  padding: 10px 30px;
  background-color: skyblue;
  .title{
    font-size: 36px;
  }
  .ant-form{
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .avatarForm{
      margin-top: 40px;
      margin-bottom: 60px;
      width: 100%;
      .ant-form-item-control-input{
        width: 100% !important;
      }
    }
      .ant-form-item-row{
        display: flex;
        justify-content: space-between;
        
        .ant-form-item-label{
          text-align: start;
          min-width: 20%;
        }
        .ant-form-item-control-input{
          width: 40%;
          .undefined-edit-content{
            position: unset;
          }
        }
        .ant-input-disabled{
          cursor: unset;
        }
        
      }
  }
`

export default SSettings