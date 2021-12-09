import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import disableScroll from "disable-scroll";

import Profile from "../../atoms/Img/Profile";
import { IconBox, Modal } from "../../";
import { dateConverter } from "../../../commons/utils/dateConverter";

export default function PostCommentItem({ item, handleDelComment }) {
  const userInfo = useSelector((state) => state.login.isLogin);
  const [modal, setModal] = useState(false);
  const handleModalOn = () => {
    setModal(true);
    disableScroll.on();
  };

  const handleModalOff = () => {
    setModal(false);
    disableScroll.off();
  };

  const hadleModalFunc = () => {
    setModal(false);
    disableScroll.off();
    handleDelComment(item.comment_id);
  };
  return (
    <Container scale={1.5}>
      <UserInfoContainer scale={1.5}>
        <Profile type="post" />
        <div className="username">{item.user.username}</div>
        {userInfo.username === item.user.username && (
          // handleDelComment(item.comment_id)
          <Del>
            <IconBox label="delete" handleClick={handleModalOn}></IconBox>
          </Del>
        )}
        {modal ? (
          <Modal
            handleModal={handleModalOff}
            handleModalFunc={hadleModalFunc}
          />
        ) : null}
        <div className="datetime">{dateConverter(item.created_at)}</div>
      </UserInfoContainer>
      <div className="comment">{item.content}</div>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem auto;
  border-bottom: 1px solid #eeeeee;
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

const Del = styled.div`
  width: 2rem;
  height: 2rem;
  line-height: 1.45rem;
  color: red;
`;
