import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Profile, Thumbnail, Common } from "../../../components";
import { modalOffAction } from "../../../store/actions/kickboard";

import KickMoney from "../../../assets/images/kickmoney.png";

export default function KickConfirm() {
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.kickboard);

  return (
    <>
      <ModalOverlay visible={modal} />
      <ModalWrapper
        visible={modal}
        onClick={(e) => {
          dispatch(modalOffAction());
        }}
      >
        <ModalInner onClick={(e) => e.stopPropagation()}>
          <KickConfirmSummary>
            <h2>자바스크립트 개 잘하는법</h2>
            {/* <Thumbnail type="confirm" /> */}
            <KickConfirmUser>
              <Profile type="confirm" />
              <div className="username">석창환</div>
              <div className="datetime">46분전</div>
              <div className="seperator">·</div>
              <div className="commentCount">{5} 개의 댓글</div>
            </KickConfirmUser>
            <h3>소개</h3>
            <KickConfirmIntroduction>
              <p>1. 코드스테이츠 부트캠프를 등록한다</p>
              <p>2. 공부한다</p>
            </KickConfirmIntroduction>
            <h3>댓글</h3>
            <KickConfirmReview>
              <KickConfirmUser>
                <Profile type="confirm" />
                <div className="username">석창환</div>
                <div className="comment">와 ㅋㅋㅋㅋ</div>
              </KickConfirmUser>
              <KickConfirmUser>
                <Profile type="confirm" />
                <div className="username">석창환야야야야</div>
                <div className="comment">
                  zzzzzzzzzzzzzzzzzzzddddddddddddzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz
                </div>
              </KickConfirmUser>
              <KickConfirmUser>
                <Profile type="confirm" />
                <div className="username">석창환</div>
                <div className="comment">와 ㅋㅋㅋㅋ</div>
              </KickConfirmUser>
            </KickConfirmReview>
            <KickConfirmKickMoney>
              <img src={KickMoney} alt="" />
              <h2>300</h2>
            </KickConfirmKickMoney>
            <Common type="confirm" label="보기" />
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
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSizes.xl};
    color: #0c0c52;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.base};
    white-space: pre-line;
    line-height: 1.5;
  }
`;

const KickConfirmSummary = styled.div`
  display: flex;
  flex-direction: column;
  height: 8rem;
  gap: 1.5rem;
`;
const KickConfirmUser = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    color: gray;
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: 2;
  }
  .username {
    margin-left: ${({ theme }) => theme.margins.small};
    margin-right: 1.5rem;
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
`;
const KickConfirmReview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  background-color: #faffff;
  border: 1px solid #eee;
  border-radius: 0.5rem;

  .username {
    width: 80%;
  }

  .comment {
    margin-left: 2.5rem;
    word-break: break-all;
  }
`;
const KickConfirmKickMoney = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;

  img {
    width: 2rem;
    height: 2rem;
  }
`;
