import React from "react";
import styled from "styled-components";

export default function Page404() {
  return (
    <Container>
      <span>404 Not Found</span>
      <span>없는 페이지 입니다</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 60vh;
  font-size: 4rem;
  font-weight: bold;
`;
