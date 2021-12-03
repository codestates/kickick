import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardList from "./";
import { useSelector } from "react-redux";
export default function BoardListTitle() {
  const test = useSelector((state) => state.board);
  return (
    <Container>
      <TitleContainer>
        <div style={{ flex: 4 }}>제목</div>
        <div style={{ flex: 3 }}>태그</div>
        <div style={{ flex: 1 }}>글쓴이</div>
        <div style={{ flex: 1.6 }}>날짜</div>
        <div style={{ flex: 0.8 }}>조회수</div>
        <div style={{ flex: 0.8 }}>댓글</div>
      </TitleContainer>
      {test.data.map((data) => (
        <BoardList data={data} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1.8rem;
`;
const TitleContainer = styled.div`
  display: flex;

  border-bottom: 1px solid black;
  font-weight: bold;

  div {
    text-align: center;
    padding: 0.5rem;
  }
`;

const ListContainer = styled.div`
  display: flex;

  border-bottom: 1px solid black;

  div {
    padding: 0.5rem;
  }
  span {
    margin: 0 0.5rem;
  }
`;
