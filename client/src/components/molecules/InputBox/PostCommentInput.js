import React from "react";
import styled from "styled-components";

import Common from "../../atoms/Button/Common";
import Comment from "../../atoms/Textarea/Comment";

export default function PostCommentInput({ size = "lg" }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  else if (size === "lg") scale = 1.5;

  return (
    <Container scale={scale}>
      <Comment size={size} />
      <CommentButtons scale={scale}>
        <Common label={"댓글등록"} size={size} />
      </CommentButtons>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => props.scale * 27}rem;
`;

const CommentButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${(props) => props.scale * 0.5}rem;
`;