import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import disableScroll from "disable-scroll";

import Profile from "../../atoms/Img/Profile";
import { IconBox, Modal } from "../../";
import { dateConverter } from "../../../commons/utils/dateConverter";

export default function PostCommentItem({ item, handleDelComment }) {
  const userInfo = useSelector((state) => state.login.isLogin);
  const { postInfo } = useSelector((state) => state.persist);
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
    <Container>
      <UserInfoContainer>
        <Profile type="post" />
        <span className="username">{item.user.username}</span>
        {postInfo.user.username === item.user.username && (
          <span className="writer">(글쓴이)</span>
        )}
        <span className="datetime">{dateConverter(item.created_at)}</span>
        {userInfo.username === item.user.username ||
        userInfo.type === "admin" ? (
          <Del>
            <IconBox label="cmtDel" handleClick={handleModalOn}></IconBox>
          </Del>
        ) : null}
      </UserInfoContainer>
      <p className="comment">{item.content}</p>
      {modal ? (
        <Modal
          handleModal={handleModalOff}
          handleModalFunc={hadleModalFunc}
          type="del"
        />
      ) : null}
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
  border-bottom: 1px solid #eeeeee;
  font-size: 1rem;

  .comment {
    width: 100%;
    margin: 1rem 0;
    font-size: 0.9rem;
    color: #333;
    word-break: break-all;
    line-height: 1.2;
  }
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;

  .username {
    margin-left: 0.5rem;
    font-weight: bold;
  }

  .datetime {
    color: gray;
    margin-left: 1rem;
    font-size: 0.8rem;
  }

  .writer {
    color: skyblue;
    font-weight: bold;
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }
`;

const Del = styled.div`
  width: 2rem;
  height: 2rem;
  color: #a8a8a8;
  margin-left: auto;
`;
