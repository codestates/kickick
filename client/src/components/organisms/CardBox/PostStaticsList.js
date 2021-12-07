import React from "react";
import styled from "styled-components";

import PostStatics from "../../molecules/Card/PostStatics";

export default function PostStaticsList() {
  return (
    <Container>
      <PostStatics type="외계인" num={25} />
      <PostStatics type="우주인" num={6} />
      <PostStatics />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  border-radius: 0.5rem;
  border: 1px solid #d8d8d8;
`;
