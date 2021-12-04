import React, { useEffect } from "react";
import styled from "styled-components";
import { DetailBoardTop, PostComment, IconContainer } from "../../components";
import { useSelector } from "react-redux";
export default function DetailBoard() {
  const state = useSelector((state) => state.board);
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
  width: 70vw;
  margin: 0 auto;
`;

const RigthContainer = styled.div``;
