import React from "react";
import styled from "styled-components";

export default function S_BoardTop() {
  return <Container></Container>;
}

const Container = styled.div`
  height: 8rem;
  margin: 2rem 0;
  display: block;
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
