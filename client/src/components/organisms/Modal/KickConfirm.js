import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { Profile, Common, Chart } from "../../../components";

import { purchaseKicks } from "../../../apis/kicks";
import { modalOffAction } from "../../../store/actions/kickboard";

import kickmoney from "../../../assets/images/icon/kickmoney.png";
import reviewicon from "../../../assets/images/icon/reviewicon.png";
import introicon from "../../../assets/images/icon/introicon.png";
import staticsicon from "../../../assets/images/icon/staticsicon.png";
import { isPointAction } from "../../../store/actions/login";

export default function KickConfirm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState();
  const { modalState, modalInfo } = useSelector((state) => state.kickboard);
  const { isLogin, isPoint } = useSelector((state) => state.login);
  console.log(modalInfo);
  const handleKickChange = () => {
    if (!isLogin) {
      setErrMsg("로그인 후 이용가능합니다");
      return;
    }
    purchaseKicks(modalInfo.kick.id)
      .then(() => {
        dispatch(modalOffAction());
        dispatch(isPointAction(isPoint - modalInfo.cost));
        navigate(`/detailkick/${modalInfo.post_id}/${modalInfo.kick.id}`);
      })
      .catch((err) => {
        setErrMsg(err.response.data.message);
      });
  };

  return (
    <>
      <ModalOverlay visible={modalState} />
      <ModalWrapper
        visible={modalState}
        onClick={(e) => {
          dispatch(modalOffAction());
        }}
      >
        <ModalInner onClick={(e) => e.stopPropagation()}>
          <KickConfirmSummary>
            <h2>{modalInfo.post_name}</h2>
            <KickSubtitle>
              <img src={introicon} alt="" />
              <h3>소개</h3>
            </KickSubtitle>
            <KickConfirmIntroduction>
              <p>{modalInfo.content}</p>
            </KickConfirmIntroduction>
            <KickSubtitle>
              <img src={staticsicon} alt="" />
              <h3>통계</h3>
            </KickSubtitle>
            <Chart data={modalInfo.likes} />
            <KickSubtitle>
              <img src={reviewicon} alt="" />
              <h3>댓글</h3>
            </KickSubtitle>
            <KickConfirmReview>
              {modalInfo.comments.length === 0 ? (
                <NoCommentContainer>
                  <h3>댓글이 없습니다</h3>
                </NoCommentContainer>
              ) : (
                modalInfo.comments.map((el) => (
                  <KickConfirmUser key={el.comment_id}>
                    <Profile type="confirm" src={el.user.profile} />
                    <span className="username">{el.user.username}</span>
                    <p className="comment">{el.content}</p>
                  </KickConfirmUser>
                ))
              )}
            </KickConfirmReview>
            <KickConfirmKickMoney>
              <img src={kickmoney} alt="" />
              <h3>{modalInfo.cost}</h3>
            </KickConfirmKickMoney>
            <Common
              type={errMsg ? "error" : "confirm"}
              label={errMsg ? errMsg : "보기"}
              handleClick={handleKickChange}
            />
          </KickConfirmSummary>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

const ModalWrapper = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 0.5rem;
  width: 30rem;
  height: 50rem;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 2rem;

  h2 {
    font-size: 1.5rem;
    height: 1.6rem;
    margin-bottom: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: #0c0c52;
  }

  img {
    width: 2rem;
    height: 2rem;
  }
`;

const KickConfirmSummary = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`;
const KickConfirmUser = styled.div`
  display: flex;
  flex-wrap: wrap;

  > span {
    color: gray;
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 2;
  }
  .username {
    margin-left: ${({ theme }) => theme.margins.small};
    color: black;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
  .seperator {
    margin: 0 ${({ theme }) => theme.margins.small};
  }
  .datetime {
    margin-left: auto;
  }
`;

const KickConfirmIntroduction = styled.div`
  padding: 1rem;
  background-color: #faffff;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  min-height: 5rem;

  p {
    font-size: 0.9rem;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
  }
`;
const KickConfirmReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  background-color: #faffff;
  border: 1px solid #eee;
  border-radius: 0.5rem;
  height: 14.5rem;
  overflow-y: auto;

  .username {
    width: 80%;
  }

  .comment {
    margin-left: 2.5rem;
    word-break: break-all;
    color: gray;
    font-size: 0.85rem;
  }
`;
const KickConfirmKickMoney = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const KickSubtitle = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 0.5rem;
  }
`;

const NoCommentContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto 0;
  font-size: 2rem;
`;
