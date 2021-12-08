import React from "react";
import styled from "styled-components";

import {
  CardBox,
  TotalSearch,
  KickConfirm,
  KickBoardPost,
} from "../../components";

export default function KickBoard() {
  return (
    <Container>
      <TotalSearch />
      <CardBox>
        <KickBoardPost />
      </CardBox>
      <KickConfirm />
    </Container>
  );
}

const Container = styled.div`
  margin: 10rem auto;

  @media ${({ theme }) => theme.device.desktop} {
    width: 88rem;
  }
  @media ${({ theme }) => theme.device.notebookL} {
    width: 66rem;
  }
  @media ${({ theme }) => theme.device.notebookS} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.mobileL} {
    width: 100%;
  }
`;
