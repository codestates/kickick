import React from "react";
import styled from "styled-components";
import { IconBox } from "../../";

export default function IconContainer() {
  return (
    <Container>
      <IconBox label="arrow" />
      <IconBox label="heart" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
