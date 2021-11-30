import React from "react";
import styled from "styled-components";

import {
  TotalSearch,
  BoardBottom,
  BoardTop,
  TopNavigator,
} from "../../components/";

export default function Board() {
  return (
    <>
      <TopNavigator />
      <Container>
        <BoardTop />
        <TotalSearch />
        <BoardBottom />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 80vw;
  margin: 1rem auto;
`;
