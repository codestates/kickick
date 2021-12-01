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
