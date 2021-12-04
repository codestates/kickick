import React from "react";
import styled from "styled-components";

import {
  TotalSearch,
  BoardTodayKicks,
  BoardBottom,
  BoardTop,
} from "../../components/";
import useAxios from "../../hooks/useAxios";
import { getPostsList } from "../../apis/posts";

export default function Board() {
  const { data, loading } = useAxios(getPostsList("학습"));

  if (loading) return "로딩중";

  return (
    <>
      <BoardTop />
      <Container>
        <MainContainer>
          <BoardTodayKicks />
          <BoardContainer>
            <TotalSearch />
            <BoardBottom data={data} />
          </BoardContainer>
        </MainContainer>
      </Container>
    </>
  );
}

const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 66rem;
`;

const MainContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 88rem;
  gap: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 88rem;
`;
