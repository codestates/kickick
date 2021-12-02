import React from "react";
import styled, { css } from "styled-components";
import {
  FaArrowLeft,
  FaRegHeart,
  FaRegEdit,
  FaRegUserCircle,
  FaRegEye,
} from "react-icons/fa";

export default function IconBox({ label = "arrow" }) {
  let icon;
  if (label === "arrow") icon = <FaArrowLeft color="#c4c4c4" />;
  else if (label === "heart") icon = <FaRegHeart color="#FFAFAF" />;
  else if (label === "edit") icon = <FaRegEdit color="#396EB0" />;
  else if (label === "user") icon = <FaRegUserCircle />;
  else if (label === "count") icon = <FaRegEye />;

  return <Container label={label}>{icon}</Container>;
}

const Container = styled.div`
  width: 3.2rem;
  padding: 0.5rem;
  ${({ label }) =>
    label === "arrow" &&
    css`
      border: 1px solid #c4c4c4;
      cursor: pointer;
    `}
  ${({ label }) =>
    label === "heart" &&
    css`
      border: 1px solid #ffafaf;
      cursor: pointer;
    `}
  ${({ label }) =>
    label === "edit" &&
    css`
      border: 1px solid #396eb0;
      cursor: pointer;
    `}
  border-radius: 10px;
  text-align: center;

  svg {
    font-size: ${({ label }) =>
      label === "user" || label === "count" ? "1.5rem" : "2rem"};
  }
`;
