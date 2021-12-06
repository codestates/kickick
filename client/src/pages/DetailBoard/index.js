import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { DetailBoardTop, PostComment, IconContainer } from "../../components";
import { useMoveTop } from "../../hooks/useMoveTop";

export default function DetailBoard() {
  const state = useSelector((state) => state.board);

  useMoveTop();
  // 이거 화면 이동시에 최상단으로 이동시켜주는 함수 함 넣어봄

  return (
    <Container>
      <IconContainer />
      <RigthContainer>
        <DetailBoardTop />
        <PostComment />
      </RigthContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 48rem;
  margin: 0 auto;
`;

const RigthContainer = styled.div``;
