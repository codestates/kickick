import React from "react";
import styled from "styled-components";

import { IconContainer, IconBox } from "../../";

export default function DetailBoardTop() {
  return (
    <Container>
      <IconContainer />
      <DetailContainer>
        <Title>헤어진 연인 붙잡는 법</Title>
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
      </DetailContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 1rem;
  gap: 2rem;
`;
const DetailContainer = styled.div`
  width: 50vw;
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
