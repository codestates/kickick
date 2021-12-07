import React from "react";
import styled from "styled-components";
export default function S_TotalSearch() {
  return (
    <Container>
      <PostAlign>
        <div></div>
        <div></div>
      </PostAlign>
      <SearchContainer>
        <div></div>
      </SearchContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1rem 1rem 1rem;
`;

const PostAlign = styled.div`
  display: flex;
  gap: 1rem;
  div {
    height: 2.7rem;
    width: 5.4rem;
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
  }
  @keyframes move {
    to {
      background-position: 100% 0, 0 0;
    }
  }
`;
const SearchContainer = styled.div`
  margin-left: auto;
  div {
    width: 21rem;
    height: 2.7rem;
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
  }
  @keyframes move {
    to {
      background-position: 100% 0, 0 0;
    }
  }
`;
