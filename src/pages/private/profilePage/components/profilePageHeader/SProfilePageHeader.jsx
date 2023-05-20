import styled from "styled-components";

const SProfilePageHeader = styled.div`
  min-height: 120px;
  min-width: 500px;
  display: flex;
  gap: 20px;
  align-items: center;
  border: 1px solid black;
  padding: 12px 36px;
  border-radius: 24px;
  background-color: #001529;
  color: white;
  h1{
    font-size: 36px;
  }
  .profileFollows{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
`

export default SProfilePageHeader