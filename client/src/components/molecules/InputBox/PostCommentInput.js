import React from "react";
import styled from "styled-components";

import { Common, Textarea } from "../../";

export default function PostCommentInput({ size = "lg" }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  else if (size === "lg") scale = 1.5;

  return (
    <Container scale={scale}>
      <Textarea size={size} />
      <CommentButtons scale={scale}>
        <Common label={"댓글등록"} type="write" />
      </CommentButtons>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* width: ${(props) => props.scale * 27}rem; */
`;

const CommentButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.scale * 0.5}rem;
`;
