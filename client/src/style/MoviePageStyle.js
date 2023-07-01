import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  > .content {
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
    width: 500px;
    height: 500px;
    text-align: center;
    .home {
      margin-bottom: 50px;
      text-decoration: underline;
      color: blue;
    }
  }
`;

export default Wrapper;
