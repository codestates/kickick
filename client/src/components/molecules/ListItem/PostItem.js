import React from "react";
import styled from "styled-components";

export default function PostItem() {
  return (
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
      <div style={{ flex: 1.6, textAlign: "center" }}>2021.11.29</div>
      <div style={{ flex: 0.8, textAlign: "center" }}>2020</div>
      <div style={{ flex: 0.8, textAlign: "center" }}>0</div>
    </ListContainer>
  );
}

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
