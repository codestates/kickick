import React from "react";
import styled from "styled-components";

import PostCommentInput from "../../molecules/InputBox/PostCommentInput";
import PostCommentItem from "../../molecules/ListItem/PostCommentItem";

export default function PostComment({ size = "lg" }) {
  return (
    <Container>
      <H3>댓글달기</H3>
      <PostCommentInput size={size} />
      <H3>
        댓글 <strong>0</strong>
      </H3>

      {/* <PostCommentItem size={size} /> */}
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
