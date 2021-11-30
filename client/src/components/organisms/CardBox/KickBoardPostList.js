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
`;
