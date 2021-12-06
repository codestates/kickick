import React from "react";
import styled from "styled-components";

export default function BoardTodayKicks({ kicks = ["1", "2", "3", "4", "5"] }) {
  return (
    <Container>
      <KicksContainer>
        <h2>오늘의 킥</h2>
        {kicks.map((el) => (
          <Kick>{el}</Kick>
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
    font-size: 1.5rem;
  }
`;

const Kick = styled.div`
  width: 15rem;
  height: 5rem;
  box-shadow: 1px 1px 7px #eee;
  font-size: 2rem;
  font-weight: bold;
`;
