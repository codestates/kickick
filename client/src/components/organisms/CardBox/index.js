import React from "react";
import styled from "styled-components";

export default function CardBox({ children }) {
  const arr = Array(5).fill(0);
  return (
    <Container>
      {arr.map((el, idx) => (
        <>{children}</>
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
