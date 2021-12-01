import React from "react";
import styled from "styled-components";

export default function TitleInput({
  holder = "제목을 입력하세요",
  width = "30rem",
}) {
  return (
    <Container>
      <Title type="text" placeholder={holder} width={width} />
    </Container>
  );
}

const Container = styled.div``;
const Title = styled.input`
  border: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  outline: none;
  width: ${({ width }) => (width ? width : "20rem")};
  height: 100%;
  font-size: 1rem;

  &:focus {
    border-bottom: 3px solid rgba(0, 0, 0, 0.6);
  }
`;
