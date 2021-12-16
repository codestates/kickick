import React from "react";
import styled from "styled-components";
export default function S_BoardBottom() {
  return (
    <Container>
      {Array(6)
        .fill(1)
        .map((el) => (
          <List>
            {Array(5)
              .fill(0)
              .map((el) => (
                <div>
                  <span></span>
                </div>
              ))}
          </List>
        ))}
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
const Container = styled.div`
  span {
    display: inline-block;
    width: 100%;
    height: 1.2rem;
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
  }
`;

const List = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;

  > div {
    height: 2rem;
    width: 1rem;
    margin: auto 0;
    text-align: center;
    padding: 0.75rem 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  border-bottom: 1px solid gray;
  > div:nth-of-type(1) {
    flex: 2;
  }
  > div:nth-of-type(2) {
    flex: 4;
    padding-left: 4rem;
  }
  > div:nth-of-type(3) {
    flex: 2;
  }
  > div:nth-of-type(4) {
    flex: 1.25;
  }
  > div:nth-of-type(5) {
    flex: 0.75;
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
`;

const BtnContainer = styled.div`
  text-align: right;
  margin: 2rem 0;
`;
