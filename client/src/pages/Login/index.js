import React from "react";
import styled from "styled-components";

import Input from "../../components/atoms/Input/LoginInput"
// import InputChamber from "../../components/molecules/InputBox/LoginInputChamber"

export default function Login () {
  return (
    <Container>
      <Input />
      {/* <InputChamber/> */}
    </Container>
    )
}

const Container = styled.div`
  position: relative;
`;
