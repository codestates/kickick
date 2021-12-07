import React from "react";
import styled from "styled-components";

import Profile from "../../atoms/Img/Profile";
import Common from "../../atoms/Button/Common";

import kakaologo from "../../../assets/images/kakaologo.png";

export default function MyPageAside() {
  return (
    <Container>
      <ProfileContainer>
        <Profile type="mypage" />
        <div className="username">
          <strong>석창환</strong>님
        </div>
      </ProfileContainer>
      <StatusContainer>
        <LoginStatusContainer>
          <LoginLogo>
            <img className="logo" src={kakaologo} alt="" />
          </LoginLogo>
          카카오 유저
        </LoginStatusContainer>
        <Common label="로그아웃" type="new" />
      </StatusContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;

  @media ${({ theme }) => theme.device.notebookS} {
    flex-direction: row;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem;

  .username {
    strong {
      font-size: 1.25rem;
    }
  }
`;
const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 2px dashed #d8d8d8;
  padding: 2rem;
  font-size: 0.9rem;
  color: gray;
  gap: 1rem;

  @media ${({ theme }) => theme.device.notebookS} {
    border-left: 2px dashed #d8d8d8;
    border-top: none;
  }
`;

const LoginStatusContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LoginLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.2rem;
  height: 2.2rem;
  background-color: #fee500;
  border-radius: 50%;
  margin-right: 0.8rem;

  img {
    width: 1.8rem;
  }
`;
