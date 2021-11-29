import React from "react";
import styled from "styled-components";
import BoardListTitle from "../../atoms/BoardList/BoardListTitle";
import Pagination from "../../atoms/Pagination";
import Common from "../../atoms/Button/Common";
export default function BoardBottom() {
  return (
    <Container>
      <BoardListTitle />
      <BtnContainer>
        <Common />
      </BtnContainer>
      <Pagination />
    </Container>
  );
}

const Container = styled.div``;
const BtnContainer = styled.div`
  text-align: right;
  margin: 2rem;
`;
