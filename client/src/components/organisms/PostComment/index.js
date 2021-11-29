import React from "react";
import styled from "styled-components";

import PostCommentInput from "../../Molecules/InputBox/PostCommentInput";
import PostCommentItem from "../../Molecules/ListItem/PostCommentItem";

export default function PostComment({ size = "lg" }) {
  const arr = Array(52).fill(0);
  return (
    <Container>
      <h3>댓글달기</h3>
      <PostCommentInput size={size} />
      <h3>
        댓글 <strong>52</strong>
      </h3>
      {arr.map((i) => (
        <PostCommentItem size={size} />
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
