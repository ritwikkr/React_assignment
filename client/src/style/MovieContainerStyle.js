import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 20px 50px;
  > .heading {
    text-align: center;
    margin-bottom: 30px;
    text-decoration: underline;
  }
  > .body {
    display: flex;
    flex-wrap: wrap;
  }
`;

export default Wrapper;
