import React from "react";
import styled from "styled-components";

export default function BoardListTitle() {
  return (
    <Container>
      <TitleContainer>
        <div style={{ flex: 4 }}>제목</div>
        <div style={{ flex: 3 }}>태그</div>
        <div style={{ flex: 1 }}>글쓴이</div>
        <div style={{ flex: 1.2 }}>날짜</div>
        <div style={{ flex: 1 }}>조회수</div>
        <div style={{ flex: 1 }}>댓글</div>
      </TitleContainer>
      <ListContainer>
        <div
          style={{
            flex: 4,

            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          대격변! 환상수호전!
        </div>
        <div style={{ flex: 3, textAlign: "center" }}>
          <span>#어그로</span>
          <span>#하드코딩</span>
        </div>
        <div style={{ flex: 1, textAlign: "center" }}>soso</div>
        <div style={{ flex: 1.2, textAlign: "center" }}>2021.11.29</div>
        <div style={{ flex: 1, textAlign: "center" }}>2020</div>
        <div style={{ flex: 1, textAlign: "center" }}>0</div>
      </ListContainer>
    </Container>
  );
}

const Container = styled.div``;
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
