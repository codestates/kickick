import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Pagination from "../../atoms/Pagination";
import Common from "../../atoms/Button/Common";
import PostList from "../../organisms/PostList";

export default function BoardBottom({
  freeCategory,
  category,
  selectPage,
  setSelectPage,
}) {
  const navigate = useNavigate();
  const handleMovePage = () => {
    navigate(`/editboard/${freeCategory}`);
  };

  return (
    <Container>
      <PostList type="freepost" />
      <BtnContainer>
        <Common type="register" label="글쓰기" handleClick={handleMovePage} />
      </BtnContainer>
      <Pagination
        category={category}
        selectPage={selectPage}
        setSelectPage={setSelectPage}
      />
    </Container>
  );
}

const Container = styled.div``;
const BtnContainer = styled.div`
  text-align: right;
  margin: 2rem 0;
`;
