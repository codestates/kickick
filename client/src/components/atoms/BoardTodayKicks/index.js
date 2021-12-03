import React from "react";
import styled from "styled-components";

export default function BoardTodayKicks({ kicks = ["1", "1!", "1"] }) {
  return (
    <Container>
      <TodayKick>오늘의 킥</TodayKick>
      <KicksContainer>
        {kicks.map((el, idx) => (
          <Kick key={idx}>{el}</Kick>
        ))}
      </KicksContainer>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 4rem;
  width: 15vw;
  height: 80vh;
  padding: 1rem;
  flex-shrink: 0;
  border-radius: 5px;
  background-color: #eeeeee;
`;
const TodayKick = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`;
const KicksContainer = styled.div`
  /* display: flex;
  flex-wrap: wrap; */
`;
const Kick = styled.div`
  flex: 0 0 48%;
  padding: 0.5rem;
  margin: 0.3rem;
  margin-left: 0.5rem;
  font-weight: bold;
  background: #c4c4c4;
`;
