import React from "react";
import styled from "styled-components";

import Profile from "../../Atoms/Img/Profile";

export default function PostCommentItem({ size = "lg" }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  else if (size === "lg") scale = 1.5;

  return (
    <Container scale={scale}>
      <UserInfoContainer scale={scale}>
        <Profile size={size} profileType={"post"} />
        <div className="username">어쩔</div>
        <div className="datetime">46분전</div>
      </UserInfoContainer>
      <div className="comment">안녕하세요~~~~~~</div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: ${(props) => props.scale * 27}rem;
  margin-bottom: ${(props) => props.scale * 0.5}rem;
  border-bottom: 1px solid #eeeeee;

  font-size: ${(props) => props.scale * 0.5}rem;

  .comment {
    width: ${(props) => props.scale * 27}rem;
    margin: ${(props) => props.scale * 0.5}rem 0;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;

  font-weight: bold;
  line-height: 2;

  .username {
    margin-left: 0.5rem;
  }

  .datetime {
    color: gray;
    margin-left: auto;
  }
`;
