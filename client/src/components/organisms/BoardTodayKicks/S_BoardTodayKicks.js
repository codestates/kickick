import React from "react";
import styled from "styled-components";

export default function S_BoardTodayKicks() {
  return (
    <Container>
      <KicksContainer>
        <h2></h2>
        {[1, 2, 3, 4, 5].map((el) => (
          <Kick></Kick>
        ))}
      </KicksContainer>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;
const KicksContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 4rem;

  padding: 0 1rem;

  gap: 2rem;

  h2 {
    width: 10rem;
    height: 1.5rem;

    background: linear-gradient(
        to right,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.5) 50%,
        rgba(255, 255, 255, 0) 80%
      ),
      lightgray;
    background-repeat: repeat-y;
    background-size: 500px 100%;
    background-position: 0 0;
    animation: move 1s infinite;
  }
  @keyframes move {
    to {
      background-position: 100% 0, 0 0;
    }
  }
`;

const Kick = styled.div`
  width: 15rem;
  height: 5rem;
  background: linear-gradient(	   
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 500px 100%;
  background-position: 0 0;
  animation: move 1s infinite;	 
}
@keyframes move {
  to {
    background-position: 100% 0, 0 0;
  }
`;
