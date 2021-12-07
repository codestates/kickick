import React from "react";
import styled from "styled-components";
export default function S_BoardBottom() {
  return (
    <Container>
      <PostList></PostList>
      <BtnContainer>
        <Common />
      </BtnContainer>
      <Pagination>
        <IconContainer />
        <IconContainer />
        <IconContainer />
        <IconContainer />
        <IconContainer />
      </Pagination>
    </Container>
  );
}
const Container = styled.div``;
const BtnContainer = styled.div`
  text-align: right;
  margin: 2rem 0;
`;

const PostList = styled.div`
  height: 20rem;
  width: 100%;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 500px 100%;
  background-position: 0 0;
  animation: move 1s infinite;

  @keyframes move {
    to {
      background-position: 100% 0, 0 0;
    }
  }
`;

const Common = styled.div`
  width: 5rem;
  height: 2.5rem;
  margin-left: auto;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 500px 100%;
  background-position: 0 0;
  animation: move 1s infinite;

  @keyframes move {
    to {
      background-position: 100% 0, 0 0;
    }
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

const IconContainer = styled.div`
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  text-align: center;
  line-height: 2rem;
  cursor: pointer;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 500px 100%;
  background-position: 0 0;
  animation: move 1s infinite;

  @keyframes move {
    to {
      background-position: 100% 0, 0 0;
    }
  }
`;
