import React from "react";
import styled, { css, keyframes } from "styled-components";

export default function Common({ label, type, handleClick, disabled }) {
  return (
    <Container onClick={handleClick} type={type} disabled={disabled}>
      {label}
    </Container>
  );
}
const shake = keyframes`
  0% {  transform: scale(0.98); }
  20% {  transform: scale(1); }
  40% { margin-left: -10px; }
  60% { margin-left: 0; margin-right: -10px; }
  80% { margin-right: 0; margin-left: -10px; }
  100% { margin: 0; } 
`;

const Container = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.color.basicBtn};

  font-weight: bold;
  color: #ffffff;
  cursor: pointer;

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
      background-color: gray;
    `}

  ${({ type }) =>
    type === "imgedit" &&
    css`
      width: 6rem;
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
      margin-left: auto;
      width: 5rem;

      &:hover {
        background-color: ${({ theme }) => theme.color.hoverBasicBtn};
      }
    `}

    ${({ type, disabled }) =>
    type === "mypage" &&
    !disabled &&
    css`
      cursor: pointer;
      &:hover {
        opacity: 0.8;
        transition: all 0.25s linear;
      }
    `}

    ${({ type }) =>
    type === "new" &&
    css`
      width: 10rem;

      background-color: white;
      border: 1px solid #d8d8d8;
      color: #aaa;
      &:hover {
        background-color: #0c0c42;
      }
    `}

  ${({ type }) =>
    type === "bigger" &&
    css`
      width: 10rem;

      &:hover {
        background-color: ${({ theme }) => theme.color.hoverBasicBtn};
      }
    `}

    ${({ type }) =>
    type === "confirm" &&
    css`
      background-color: ${({ theme }) => theme.color.confirmBtn};
    `}

    ${({ type }) =>
    type === "error" &&
    css`
      background-color: ${({ theme }) => theme.color.confirmBtnError};
      animation: 0.3s linear ${shake};
    `}

    ${({ type }) =>
    type === "resign" &&
    css`
      background-color: red;
      width: 15rem;
    `}
`;
