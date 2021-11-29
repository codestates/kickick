import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export default function PostTag({
  size = "lg",
  handleClick,
  tagType = "hashtag",
  detail = "검색어가 없습니다",
}) {
  let scale = 0.5;
  if (size === "sm") scale = 0.4;
  else if (size === "lg") scale = 0.75;

  let tag = "#";
  if (tagType === "제목") tag = "제목 : ";
  else if (tagType === "글쓴이") tag = "글쓴이 : ";

  return (
    <Container onClick={handleClick} scale={scale}>
      {tag}
      {detail}
      <FaTimes style={{ cursor: "pointer" }} />
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  align-items: center;

  height: ${(props) => props.scale * 2.2}rem;
  padding: 0 ${(props) => props.scale}rem;
  margin-left: 1rem;
  border: 2px solid rgba(0, 0, 0, 0.5);
  border-radius: 20px;

  font-size: ${(props) => props.scale}rem;
  font-weight: bold;

  svg {
    margin: auto 0;
    margin-left: 0.2rem;
  }
`;
