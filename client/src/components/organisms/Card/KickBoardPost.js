import React from "react";
import styled from "styled-components";

import Thumbnail from "../../atoms/Img/Thumbnail";
import Profile from "../../atoms/Img/Profile";

export default function KickBoardPost() {
  return (
    <Container>
      <Thumbnail />
      <PostSummary>
        <h3>자바스크립트 개 잘하는법</h3>
        <p>1. 코드스테이츠 부트캠프를 등록한다 2. 공부한다</p>
      </PostSummary>
      <PostUser>
        <Profile profileType={"post"} />
        <div className="username">석창환</div>
        <div className="commentCount">{5} 개의 댓글</div>
      </PostUser>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 20rem;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #dddddd;

  overflow: hidden;
`;

const PostSummary = styled.div``;
const PostUser = styled.div`
  display: flex;

  .commentCount {
    margin-left: ${({ theme }) => theme.margins.xl};
  }
`;
