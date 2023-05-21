import styled from "styled-components";

const SSearchResult = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
    .userItem{
      display: flex;
      align-items: center;
      gap: 5px;
      background-color: lightskyblue;
      padding: 4px;
      border-radius: 5px;
      cursor: pointer;
    }
  .userItem:hover{
    background-color: lightblue;
  }
  
`
export default SSearchResult