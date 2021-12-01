import React from "react";
import styled from "styled-components";
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
  { icon: <FaRegClock />, label: "최신", category: "정렬" },
  { icon: <FaFireAlt />, label: "인기", category: "정렬" },
  { icon: <FaBook />, label: "학습", category: "분류" },
  { icon: <FaAffiliatetheme />, label: "여가", category: "분류" },
  { icon: <FaShoppingBag />, label: "생활", category: "분류" },
  { icon: <FaGuitar />, label: "예술", category: "분류" },
  { icon: <FaMoneyBillAlt />, label: "경제", category: "분류" },
  { icon: <FaHelicopter />, label: "여행", category: "분류" },
];

export default function IconText({ highlight, label, handleClick, fontSize }) {
  return (
    <Container
      onClick={handleClick}
      highlight={highlight}
      label={label}
      fontSize={fontSize}
    >
      {iconList.find((i) => i.label === label).icon}
      {label}
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background-color: ${({ highlight, label }) =>
    highlight === label
      ? label === "최신"
        ? "rgba(0,0,255,0.1)"
        : "rgba(255,0,0,0.1)"
      : "none"};

  border-radius: 5px;

  font-size: ${({ fontSize }) => (fontSize ? fontSize : "1.5rem")};
  font-weight: bold;
  color: ${({ highlight, label }) =>
    highlight === label ? (label === "최신" ? "blue" : "red") : "black"};

  cursor: pointer;

  svg {
    margin-right: 0.5rem;
    font-size: 1.8rem;
    pointer-events: none;
  }
`;
