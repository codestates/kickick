import React from "react";
import styled from "styled-components";

import { IconBox } from "../../";

import gag from "../../../assets/images/gag.jpeg";

export default function DetailBoardTop() {
  return (
    <Container>
      <TopContainer>
        <Title>다시 연락온 연인 물리치는 비법</Title>
        <UserAndCountContainer>
          <UserContainer>
            <IconBox label="user" />
            전남친
          </UserContainer>
          <UserContainer>
            <IconBox label="count" />
            9797
          </UserContainer>
        </UserAndCountContainer>
        <TagContainer>
          <span>태그</span>
          <span>#어디야?</span>
          <span>#뭐해?</span>
          <span>#자니?</span>
        </TagContainer>
      </TopContainer>
      <Content>
        <img style={{ width: "30rem" }} src={gag} />
        <p>돈 빌려달라고 하면 바로 연락 안 옮 ㅅㄱ</p>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 60vw;
`;

const TopContainer = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 2px dashed #c4c4c4;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem;
`;
const UserAndCountContainer = styled.div`
  display: flex;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-right: 8rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const TagContainer = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  span {
    margin-right: 1rem;
    font-weight: bold;
  }
`;

const Content = styled.div`
  height: auto;
  margin-left: 3rem;
  padding: 2rem 1rem;
`;
