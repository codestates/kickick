import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { getPostsList } from "../../apis/posts";
import { getList } from "../../store/actions/postadd/boardList";

import {
  TotalSearch,
  BoardBottom,
  BoardTop,
  BoardTodayKicks,
} from "../../components/";

export default function Board() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    getPostsList("학습", null, null, 20)
      .then((data) => dispatch(getList(data.data)))
      .then(() => setLoading(false))
      .catch((err) => console.log(err.response));
  }, []);

  if (loading) return "";
  return (
    <>
      <BoardTop />
      <Container>
        <MainContainer>
          <BoardTodayKicks />
          <BoardContainer>
            <TotalSearch />
            <BoardBottom />
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
