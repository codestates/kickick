import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BoardList from "./";
import { useSelector } from "react-redux";
export default function BoardListTitle() {
  const test = useSelector((state) => state.board);
  const handleClick = (id) => {
    console.log(id);
  };
  return (
    <Container>
      <TitleContainer>
        <div style={{ flex: 2 }}>태그</div>
        <div style={{ flex: 4 }}>제목</div>
        <div style={{ flex: 1.6 }}>글쓴이</div>
        <div style={{ flex: 1.6 }}>날짜</div>
        <div style={{ flex: 0.6 }}>조회</div>
        <div style={{ flex: 0.6 }}>댓글</div>
      </TitleContainer>
      {test.data.map((data) => (
        <BoardList
          key={data.post_id}
          data={data}
          onClick={() => handleClick(data.post.id)}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  margin-top: 1.8rem;
`;
const TitleContainer = styled.div`
  display: flex;

  border-bottom: 1px solid #d8d8d8;
  font-weight: bold;

  div {
    height: 2.6rem;
    line-height: 2.6rem;
    padding: 0 0.5rem;
    text-align: center;
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
