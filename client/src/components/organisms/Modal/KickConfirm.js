import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Profile, Common, Chart } from "../../../components";
import { modalOffAction } from "../../../store/actions/kickboard";

import KickMoney from "../../../assets/images/kickmoney.png";
import reviewicon from "../../../assets/images/reviewicon.png";
import introicon from "../../../assets/images/introicon.png";
import staticsicon from "../../../assets/images/staticsicon.png";

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
            <KickSubtitle>
              <img src={introicon} alt="" />
              <h3>소개</h3>
            </KickSubtitle>
            <KickConfirmIntroduction>
              <p>1. 코드스테이츠 부트캠프를 등록한다</p>
              <p>2. 공부한다</p>
            </KickConfirmIntroduction>
            <KickSubtitle>
              <img src={staticsicon} alt="" />
              <h3>통계</h3>
            </KickSubtitle>
            <Chart />
            <KickSubtitle>
              <img src={reviewicon} alt="" />
              <h3>댓글</h3>
            </KickSubtitle>
            <KickConfirmReview>
              <KickConfirmUser>
                <Profile type="confirm" />
                <span className="username">석창환</span>
                <p className="comment">와 ㅋㅋㅋㅋ</p>
              </KickConfirmUser>
              <KickConfirmUser>
                <Profile type="confirm" />
                <span className="username">석창환야야야야</span>
                <p className="comment">이거 보고 자바스크립트 마스터함요</p>
              </KickConfirmUser>
              <KickConfirmUser>
                <Profile type="confirm" />
                <span className="username">석창환</span>
                <p className="comment">와 ㅋㅋㅋㅋ</p>
              </KickConfirmUser>
            </KickConfirmReview>
            <KickConfirmKickMoney>
              <img src={KickMoney} alt="" />
              <h3>300</h3>
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
    margin-bottom: 1rem;
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
  height: 8rem;
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

  p {
    line-height: 1.5;
    font-size: 0.9rem;
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
