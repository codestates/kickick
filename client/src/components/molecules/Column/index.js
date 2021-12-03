import React from "react";
import styled from "styled-components";

export default function Column() {
  return (
    <Container>
      <div style={{ flex: 3 }}>제목</div>
      <div style={{ flex: 4 }}>태그</div>
      <div style={{ flex: 1 }}>글쓴이</div>
      <div style={{ flex: 2 }}>날짜</div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  border-bottom: 1px solid #dddddd;
  font-weight: bold;

  div {
    text-align: center;
    padding: 0.5rem;
  }
`;
