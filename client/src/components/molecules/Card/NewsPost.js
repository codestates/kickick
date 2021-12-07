import React from "react";
import styled from "styled-components";

export default function NewsPost() {
  return (
    <Container>
      <h2>[공지] 킥머니 오류가 생겨서 모두 초기화합니다 </h2>
      <DetailInfo>
        <span>3달전</span>
        <span>운영자</span>
      </DetailInfo>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 6rem;
  padding: 1rem;
  border-bottom: 1px solid #d8d8d8;

  cursor: pointer;

  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-bottom: 1rem;
    &:hover {
      color: gray;
    }
  }
`;

const DetailInfo = styled.div`
  display: flex;

  span {
    color: gray;
    margin-right: 1rem;
  }
`;
