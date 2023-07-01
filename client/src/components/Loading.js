import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Wrapper>
      <h1>Loading...</h1>
    </Wrapper>
  );
}

export default Loading;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
