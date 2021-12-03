import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { getPostsList } from "../../apis/posts";
import { getList } from "../../store/actions/postadd/boardList";
import {
  TotalSearch,
  BoardBottom,
  BoardTop,
  TopNavigator,
} from "../../components/";

export default function Board() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    getPostsList("학습")
      .then((data) => dispatch(getList(data.data)))
      .then(() => setLoading(false))
      .catch((err) => console.log(err.response));
  }, []);
  if (loading) return "안돼!";
  return (
    <Container>
      <BoardTop />
      <TotalSearch />
      <BoardBottom />
    </Container>
  );
}

const Container = styled.div`
  width: 88rem;
  margin: 0 auto;
`;
