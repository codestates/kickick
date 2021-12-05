import React from "react";
import styled from "styled-components";

import { InputChamber } from "../../components";

export default function Login({ setIsLogin }) {
  return (
    <Container>
      <InputChamber setIsLogin={setIsLogin} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: calc(100vh - 4rem);
`;
