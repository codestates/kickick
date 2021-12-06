import React from "react";
import styled from "styled-components";
import { DetailBoardTop, PostComment, IconContainer } from "../../components";

export default function DetailBoard() {
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
