import React from "react";
import styled, { css } from "styled-components";

const btnList = [
  { type: "write", size: 1.5 * 0.5 },
  { type: "confirm", size: 1.5 * 1 },
  { type: "register", size: 1.5 * 1.5 },
  { type: "imgedit", size: 1.5 * 1.2 },
  { type: "bigger", size: 1.5 * 2.5 },
];

export default function Common({ label, type, handleClick }) {
  const { size } = btnList.find((i) => i.type === type);

  return (
    <Container onClick={handleClick} size={size} type={type}>
      {label}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: ${(props) => props.size * 1.2}rem;
  padding: ${(props) => props.size * 0.1}rem ${(props) => props.size * 0.3}rem;
  border-radius: 10px;
  background-color: #0c0c42;

  font-size: ${(props) => props.size * 0.4}rem;
  font-weight: bold;
  color: #ffffff;
  line-height: 0.9;
  cursor: pointer;
  ${({ type }) =>
    type === "imgedit" &&
    css`
      width: 5rem;
      background-color: white;
      color: black;
      border: 1px solid #ddd;
    `}
  ${({ type }) =>
    type === "register" &&
    css`
      &:hover {
        background-color: gray;
      }
    `}

  ${({ type }) =>
    type === "bigger" &&
    css`
      width: 10rem;
    `}
`;
