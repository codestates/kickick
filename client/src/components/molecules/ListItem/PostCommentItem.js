import React from "react";
import styled from "styled-components";

import Profile from "../../atoms/Img/Profile";
import { dateConverter } from "../../../commons/utils/dateConverter";

export default function PostCommentItem({ item }) {
  return (
    <Container scale={1.5}>
      <UserInfoContainer scale={1.5}>
        <Profile type="post" />
        <div className="username">{item.user.username}</div>
        <div className="datetime">{dateConverter(item.created_at)}</div>
      </UserInfoContainer>
      <div className="comment">{item.content}</div>
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
