import React from "react";
import styled from "styled-components";

export default function BoardTodayKicks({
  kicks = [
    "이거나만아는건데공유한다",
    "하드코딩ㄴㄴ? 오히려하드코딩이 더 빠르다!",
    "헬로 월드 다른언어로 쳐보자",
  ],
}) {
  return (
    <Container>
      <TodayKick>오늘의 킥</TodayKick>
      <KicksContainer>
        {kicks.map((el) => (
          <Kick>{el}</Kick>
        ))}
      </KicksContainer>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;

  border-radius: 5px;
  background-color: #eeeeee;
`;
const TodayKick = styled.div`
  font-weight: bold;
  margin-bottom: 1rem;
`;
const KicksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Kick = styled.div`
  flex: 0 0 48%;
  padding: 0.5rem;
  margin: 0.3rem;
  margin-left: 0.5rem;
  font-weight: bold;
  background: #c4c4c4;
`;
