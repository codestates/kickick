import React from "react";
import styled, { css } from "styled-components";

export default function Common({ label, type, handleClick }) {
  return (
    <Container onClick={handleClick} type={type}>
      {label}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #0c0c42;

  font-weight: bold;
  color: #ffffff;
  cursor: pointer;

  ${({ type }) =>
    type === "imgedit" &&
    css`
      width: 5rem;
      background-color: white;
      color: black;
      border: 1px solid #ddd;
      box-shadow: 1px 1px 5px #eee;
      &:hover {
        background-color: #ddd;
      }
    `}
  ${({ type }) =>
    type === "register" &&
    css`
      height: 2.5rem;
      &:hover {
        background-color: gray;
      }
    `}

  ${({ type }) =>
    type === "bigger" &&
    css`
      width: 10rem;
    `}

    ${({ type }) =>
    type === "confirm" &&
    css`
      height: 4rem;
      background-color: skyblue;
    `}
`;
