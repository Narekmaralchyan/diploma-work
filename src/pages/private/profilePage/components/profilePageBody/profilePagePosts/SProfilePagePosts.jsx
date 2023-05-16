import styled from "styled-components";

const SProfilePagePosts = styled.div`
      
      padding: 10px;
      .singlePost{
        height: 250px;
        border: 1px solid blue;
        display: flex;
        justify-content: center;
        border-radius: 10px;
        overflow: hidden;
        .postImage{
          width: 100%;
          height: 100%;
          object-fit:cover;
        }
      }
`

export default SProfilePagePosts