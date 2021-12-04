import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { getPostsList } from "../../apis/posts";
import { getList } from "../../store/actions/postadd/boardList";
import {
  TotalSearch,
  BoardBottom,
  BoardTop,
  BoardTodayKicks,
  TopNavigator,
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
  if (loading) return ""; //로딩스피너로 대체
  return (
    <Container>
      <TodayKickFrame>
        <BoardTodayKicks />
      </TodayKickFrame>
      <Frame>
        <BoardTop />
        <TotalSearch />
        <BoardBottom />
      </Frame>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const Frame = styled.div`
  width: 55vw;
`;

const TodayKickFrame = styled.div`
  margin-top: 2rem;
  padding-right: 2rem;
`;
