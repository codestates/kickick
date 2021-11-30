import React from "react";
import styled from "styled-components";

import InputChamber from "../../components/molecules/InputBox/LoginInputChamber"

export default function Login () {
  return (
    <Container>
      <InputChamber/>
    </Container>
    )
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: calc(100vh - 4rem);
`;
