import React from "react";
import styled from "styled-components";

export default function PostTag({ handleClick, type = "hashtag", detail }) {
  let color = "#F15F5F";
  let tag = "# ";
  if (type === "제목") {
    tag = "제목 : ";
    color = "#86E57F";
  } else if (type === "글쓴이") {
    tag = "글쓴이 : ";
    color = "#6799FF";
  }

  return (
    <Container onClick={handleClick} color={color}>
      {tag}
      {detail}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  align-items: center;

  padding: 0.5rem;
  border: 2px solid gray;
  border-radius: 10px;

  font-size: 1rem;
  font-weight: bold;
  color: gray;

  cursor: pointer;

  svg {
    font-size: 1.2rem;
    margin-left: 0.2rem;
  }
`;
