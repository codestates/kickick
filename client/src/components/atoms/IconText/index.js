import React from "react";
import styled, { css } from "styled-components";
import {
  FaHashtag,
  FaUserAstronaut,
  FaAlignJustify,
  FaRegClock,
  FaFireAlt,
} from "react-icons/fa";

export const iconList = [
  { icon: <FaAlignJustify />, label: "제목", category: "검색" },
  { icon: <FaUserAstronaut />, label: "글쓴이", category: "검색" },
  { icon: <FaHashtag />, label: "태그", category: "검색" },
  { icon: <FaRegClock />, label: "최신", category: "정렬", color: "blue" },
  { icon: <FaFireAlt />, label: "인기", category: "정렬", color: "red" },
];

export default function IconText({ isActive, label, handleClick }) {
  const { icon, color, category } = iconList.find((i) => i.label === label);

  return (
    <Container
      onClick={handleClick}
      isActive={isActive}
      color={color}
      category={category}
    >
      {icon}
      {label}
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  font-size: 1.5rem;
  font-weight: bold;

  cursor: pointer;
  transition: all 0.2s ease-out;

  svg {
    margin-right: 0.5rem;
    font-size: 1.8rem;
    pointer-events: none;
  }

  ${({ category }) =>
    category === "정렬" &&
    css`
      border-bottom: 3px solid
        ${({ isActive, color }) => (isActive ? color : "transparent")};
      color: ${({ isActive, color }) => (isActive ? color : "#cccccc")};
    `}

  ${({ category }) =>
    category === "검색" &&
    css`
      font-size: 1rem;
      svg {
        font-size: 1.1rem;
      }
    `}
`;
