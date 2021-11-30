import React from "react";
import styled from "styled-components";

export default function TitleInput() {
  return (
    <Container>
      <Title type="text" placeholder="제목을 입력하세요." />
    </Container>
  );
}

const Container = styled.div``;
const Title = styled.input`
  border: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  outline: none;
  width: 30rem;
  height: 100%;
  font-size: 1rem;

  &:focus {
    border-bottom: 3px solid rgba(0, 0, 0, 0.6);
  }
`;
