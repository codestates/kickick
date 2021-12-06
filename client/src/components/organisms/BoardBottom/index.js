import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Pagination, Common, PostList } from "../../../components";

export default function BoardBottom() {
  const navigate = useNavigate();
  const handleMovePage = () => {
    navigate("/editboard");
  };

  return (
    <Container>
      <PostList type="freepost" />
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
  margin: 2rem 0;
`;
