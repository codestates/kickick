import React from "react";
import styled, { css } from "styled-components";
import { FaArrowLeft, FaRegHeart, FaRegEdit } from "react-icons/fa";

export default function IconBox({ color = "#c4c4c4", label = "arrow" }) {
  let icon;
  if (label === "arrow") icon = <FaArrowLeft color="#c4c4c4" />;
  else if (label === "heart") icon = <FaRegHeart color="#FFAFAF" />;
  else if (label === "edit") icon = <FaRegEdit color="#396EB0" />;

  return <Container label={label}>{icon}</Container>;
}

const Container = styled.div`
  width: 3.2rem;
  padding: 0.5rem;
  ${({ label }) =>
    label === "arrow" &&
    css`
      border: 1px solid #c4c4c4;
    `}
  ${({ label }) =>
    label === "heart" &&
    css`
      border: 1px solid #ffafaf;
    `}
  ${({ label }) =>
    label === "edit" &&
    css`
      border: 1px solid #396eb0;
    `}
  border-radius: 10px;
  text-align: center;

  cursor: pointer;

  svg {
    font-size: 2rem;
  }
`;
