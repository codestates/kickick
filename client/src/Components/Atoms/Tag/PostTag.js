import React from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export default function PostTag({
  size = "lg",
  handleClick,
  tagType = "hashtag",
  detail = "검색어가 없습니다",
}) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  else if (size === "lg") scale = 1.5;

  let tag = "#";
  if (tagType === "title") tag = "제목 : ";
  else if (tagType === "author") tag = "글쓴이 : ";

  return (
    <Container onClick={handleClick} scale={scale}>
      {tag}
      {detail}
      <FaTimes />
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  width: ${(props) => props.scale * 5}rem;
  height: ${(props) => props.scale * 2}rem;

  font-size: ${(props) => props.scale}rem;
  font-weight: bold;
`;
