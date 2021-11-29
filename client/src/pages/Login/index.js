import React from "react";
import styled from "styled-components";

import Input from "../../components/atoms/Input/LoginInput"

export default function Login () {
  return (
    <Container>
      <Input />
    </Container>
    )
}

const Container = styled.div`
  position: relative;
`;
