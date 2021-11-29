import React from "react";
import styled from "styled-components";

import { KickBoardPost } from "../..";

export default function KickBoardPostList() {
  const arr = Array(10).fill(0);
  return (
    <Container>
      {arr.map((el) => (
        <KickBoardPost />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;

  @media ${({ theme }) => theme.device.desktop} {
    width: 80rem;
  }
  @media ${({ theme }) => theme.device.notebookL} {
    width: calc(64rem - 1px);
  }
`;
