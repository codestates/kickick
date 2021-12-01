import React from "react";
import styled, { css } from "styled-components";
import {
  FaHashtag,
  FaUserAstronaut,
  FaAlignJustify,
  FaRegClock,
  FaFireAlt,
  FaBook,
  FaAffiliatetheme,
  FaShoppingBag,
  FaGuitar,
  FaMoneyBillAlt,
  FaHelicopter,
} from "react-icons/fa";

export const iconList = [
  { icon: <FaAlignJustify />, label: "제목", category: "검색" },
  { icon: <FaUserAstronaut />, label: "글쓴이", category: "검색" },
  { icon: <FaHashtag />, label: "태그", category: "검색" },
  { icon: <FaRegClock />, label: "최신", category: "정렬", color: "blue" },
  { icon: <FaFireAlt />, label: "인기", category: "정렬", color: "red" },
  { icon: <FaBook />, label: "학습", category: "게시판" },
  { icon: <FaAffiliatetheme />, label: "여가", category: "게시판" },
  { icon: <FaShoppingBag />, label: "생활", category: "게시판" },
  { icon: <FaGuitar />, label: "예술", category: "게시판" },
  { icon: <FaMoneyBillAlt />, label: "경제", category: "게시판" },
  { icon: <FaHelicopter />, label: "여행", category: "게시판" },
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

  font-size: 1rem;
  font-weight: bold;

  svg {
    margin-right: 0.5rem;
    font-size: 1.1rem;
    pointer-events: none;
  }

  ${({ category }) =>
    category === "정렬" &&
    css`
      border-bottom: 3px solid
        ${({ isActive, color }) => (isActive ? color : "transparent")};
      font-size: 1.5rem;
      color: ${({ isActive, color }) => (isActive ? color : "#cccccc")};
      transition: all 0.2s ease-out;
      cursor: pointer;
      svg {
        font-size: 1.8rem;
      }
    `}

  ${({ category }) =>
    category === "검색" &&
    css`
      font-size: 1rem;
      cursor: pointer;
      svg {
        font-size: 1.1rem;
      }
    `}

    ${({ category }) =>
    category === "게시판" &&
    css`
      font-size: 2rem;
      svg {
        font-size: 2.5rem;
      }
    `}
`;
