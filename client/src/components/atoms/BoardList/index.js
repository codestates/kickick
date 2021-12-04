import React from "react";
import styled from "styled-components";

export default function BoardList({ data, handleClick }) {
  return (
    <ListContainer>
      <div
        style={{
          flex: 2,
          textAlign: "center",
          fontWeight: "500",
          color: "#DD4A48",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        <span>#어그로다</span>
        <span>#하드코디디</span>
      </div>
      <div
        onClick={() => handleClick(data.post_id)}
        style={{
          flex: 4,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          cursor: "pointer",
        }}
      >
        {data.post_name}
      </div>
      <div style={{ flex: 1.6, textAlign: "center" }}>{data.user.username}</div>
      <div style={{ flex: 1.6, textAlign: "center" }}>{data.created_at}</div>
      <div style={{ flex: 0.6, textAlign: "center" }}>{data.view_count}</div>
      <div style={{ flex: 0.6, textAlign: "center" }}>
        {data.comments.length}
      </div>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  display: flex;

  border-bottom: 1px solid #d8d8d8;
  &:hover {
    font-weight: bold;
  }
  > div {
    height: 2.6rem;
    line-height: 2.6rem;
    padding: 0 0.5rem;
  }
  span {
    padding-right: 0.5rem;
    font-size: 0.8rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
