import React from "react";
import styled from "styled-components";

import PostCommentInput from "../../molecules/InputBox/PostCommentInput";
import PostCommentItem from "../../molecules/ListItem/PostCommentItem";

export default function PostComment() {
  const arr = Array(52).fill(0);
  return (
    <Container>
      <H3>댓글달기</H3>
      <PostCommentInput />
      <H3>
        댓글 <strong>0</strong>
      </H3>
      {arr.map((i) => (
        <PostCommentItem />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    color: skyblue;
  }
`;

const H3 = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;
