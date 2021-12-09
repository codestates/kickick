import React from "react";
import styled, { css } from "styled-components";

import {
  FaArrowLeft,
  FaRegHeart,
  FaRegEdit,
  FaRegUserCircle,
  FaRegEye,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
  FaHeart,
  FaTimes,
} from "react-icons/fa";

const iconList = [
  { label: "delete", icon: <FaTimes />, color: "red", category: "comments" },
  {
    label: "arrow",
    icon: <FaArrowLeft />,
    color: "#c4c4c4",
    category: "postNav",
  },
  { label: "red", icon: <FaHeart />, color: "red", category: "postNav" },
  {
    label: "heart",
    icon: <FaRegHeart />,
    color: "#FFAFAF",
    category: "postNav",
  },
  { label: "edit", icon: <FaRegEdit />, color: "#396EB0", category: "postNav" },
  {
    label: "user",
    icon: <FaRegUserCircle />,
    color: "#000000",
    category: "postInfo",
  },
  {
    label: "count",
    icon: <FaRegEye />,
    color: "#000000",
    category: "postInfo",
  },
  {
    label: "doubleleft",
    icon: <FaAngleDoubleLeft />,
    color: "#000000",
    category: "pagination",
  },
  {
    label: "doubleright",
    icon: <FaAngleDoubleRight />,
    color: "#000000",
    category: "pagination",
  },
  {
    label: "left",
    icon: <FaAngleLeft />,
    color: "#000000",
    category: "pagination",
  },
  {
    label: "right",
    icon: <FaAngleRight />,
    color: "#000000",
    category: "pagination",
  },
];

export default function IconBox({ label = "arrow", handleClick }) {
  const { icon, color, category } = iconList.find((el) => el.label === label);
  return (
    <Container
      label={label}
      color={color}
      onClick={() => handleClick(label)}
      category={category}
    >
      {icon}
    </Container>
  );
}

const Container = styled.div`
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;

  ${({ category, color }) =>
    category === "postNav" &&
    css`
      width: 2.5rem;
      height: 2.5rem;
      border: 1px solid ${color};
      color: ${color};

      border-radius: 10px;
      svg {
        font-size: 1.5rem;
      }
    `}
`;
