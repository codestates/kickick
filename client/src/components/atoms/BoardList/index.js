import React from "react";
import styled from "styled-components";

export default function BoardList({ data }) {
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
        {data.post_name}
      </div>
      <div style={{ flex: 3, textAlign: "center" }}>
        <span>#어그로</span>
        <span>#하드코딩</span>
      </div>
      <div style={{ flex: 1, textAlign: "center" }}>{data.user.username}</div>
      <div style={{ flex: 1.6, textAlign: "center" }}>{data.created_at}</div>
      <div style={{ flex: 0.8, textAlign: "center" }}>{data.view_count}</div>
      <div style={{ flex: 0.8, textAlign: "center" }}>
        {data.comments.length}
      </div>
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
