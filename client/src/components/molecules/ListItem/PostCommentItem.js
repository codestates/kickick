import React from "react";
import styled from "styled-components";

import Profile from "../../atoms/Img/Profile";

export default function PostCommentItem() {
  return (
    <Container scale={1.5}>
      <UserInfoContainer scale={1.5}>
        <Profile type="post" />
        <div className="username">어쩔</div>
        <div className="datetime">46분전</div>
      </UserInfoContainer>
      <div className="comment">삭제되었습니다.... 진짜로</div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;

  /* width: ${(props) => props.scale * 27}rem; */
  width: 95%;
  margin: 0.5rem auto;
  /* margin-bottom: ${(props) => props.scale * 0.5}rem; */
  border-bottom: 1px solid #eeeeee;

  /* font-size: ${(props) => props.scale * 0.5}rem; */
  font-size: 1rem;

  .comment {
    width: ${(props) => props.scale * 27}rem;
    margin: ${(props) => props.scale * 0.5}rem 0;
    font-style: italic;
    color: gray;
    font-weight: bold;
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
