import React from "react";
import styled from "styled-components";

export default function Main() {
  return <Container>hello world!</Container>;
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  min-height: 79vh;
  margin-top: 4rem;
`;