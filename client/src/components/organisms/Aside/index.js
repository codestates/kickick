import React from "react";
import styled from "styled-components";

import Profile from "../../atoms/Img/Profile";
import Common from "../../atoms/Button/Common";

export default function MyPageAside() {
  return (
    <Container>
      <ProfileContainer>
        <Profile type="mypage" />
        <div className="username">
          <strong>석창환</strong>님
        </div>
        <div className="userrole">일반유저</div>
        <Common type="register" label="로그아웃" />
      </ProfileContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 20%;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem 0;

  border-bottom: 1px solid #eeeeee;

  .username {
    margin-top: 2rem;

    strong {
      font-weight: bold;
      font-size: 1.25rem;
    }
  }

  .userrole {
    margin: 1rem 0;
    font-size: 0.8rem;
    color: gray;
  }
`;
