import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BoardListTitle from "../../atoms/BoardList/BoardListTitle";
import Pagination from "../../atoms/Pagination";
import Common from "../../atoms/Button/Common";
export default function BoardBottom() {
  const navigate = useNavigate();
  const handleMovePage = () => {
    navigate("/editboard");
  };
  return (
    <Container>
      <BoardListTitle />
      <BtnContainer>
        <Common type="register" label="글쓰기" handleClick={handleMovePage} />
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
