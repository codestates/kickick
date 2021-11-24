import React from "react";
import styled from "styled-components";

import MainTamplate from "./Template"

export default function Main () {
  return (
    <Container>
      <MainTamplate/>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
