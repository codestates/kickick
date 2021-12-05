import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { KickBoardPostList, TotalSearch, KickConfirm } from "../../components";

export default function KickBoard() {
  return (
    <Container>
      <TotalSearch />
      <KickBoardPostList />
    </Container>
  );
}

const Container = styled.div`
  margin: 15rem auto;

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
