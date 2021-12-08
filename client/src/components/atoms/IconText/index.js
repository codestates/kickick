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
  FaRegEdit,
  FaRegCalendarAlt,
  FaRegBookmark,
  FaRegComment,
  FaRegClipboard,
  FaRegHeart,
  FaDollarSign,
  FaRegWindowClose,
} from "react-icons/fa";

import { ImGift } from "react-icons/im";

import { VscMegaphone } from "react-icons/vsc";

export const iconList = [
  { icon: <FaAlignJustify />, label: "제목", category: "검색" },
  { icon: <FaUserAstronaut />, label: "글쓴이", category: "검색" },
  { icon: <FaHashtag />, label: "태그", category: "검색" },
  { icon: <FaRegClock />, label: "최신", category: "정렬", color: "skyblue" },
  { icon: <FaFireAlt />, label: "인기", category: "정렬", color: "red" },
  { icon: <FaBook />, label: "학습", category: "게시판" },
  { icon: <FaAffiliatetheme />, label: "여가", category: "게시판" },
  { icon: <FaShoppingBag />, label: "생활", category: "게시판" },
  { icon: <FaGuitar />, label: "예술", category: "게시판" },
  { icon: <FaMoneyBillAlt />, label: "경제", category: "게시판" },
  { icon: <FaHelicopter />, label: "여행", category: "게시판" },
  { icon: <FaRegEdit />, label: "프로필 수정", category: "마이페이지" },
  { icon: <FaRegCalendarAlt />, label: "출석", category: "마이페이지" },
  { icon: <FaRegHeart />, label: "좋아요 한 글", category: "마이페이지" },
  { icon: <FaRegClipboard />, label: "내가 쓴 글", category: "마이페이지" },
  { icon: <FaRegComment />, label: "내가 단 댓글", category: "마이페이지" },
  { icon: <FaRegBookmark />, label: "내가 산 킥", category: "마이페이지" },
  { icon: <FaDollarSign />, label: "킥머니 로그", category: "마이페이지" },
  { icon: <FaDollarSign />, label: "킥머니 로그", category: "마이페이지" },
  { icon: <ImGift />, label: "진행중인 이벤트", category: "이벤트" },
  { icon: <FaRegWindowClose />, label: "완료한 이벤트", category: "이벤트" },
  { icon: <VscMegaphone />, label: "뉴스", category: "공지" },
  { icon: <ImGift />, label: "이벤트", category: "공지" },
];

export default function IconText({ isActive, label, handleClick, board }) {
  const { icon, color, category } = iconList.find((i) => i.label === label);

  return (
    <Container
      onClick={handleClick}
      isActive={isActive}
      color={color}
      category={category}
      board={board}
    >
      {category === "공지" ? (
        <>
          {label}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {label}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
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
      margin: 0 0.5rem;
      border-bottom: 3px solid
        ${({ isActive, color }) => (isActive ? color : "transparent")};
      font-size: 1.3rem;
      color: ${({ isActive, color }) => (isActive ? color : "#cccccc")};
      transition: all 0.2s ease-out;
      cursor: pointer;
      svg {
        font-size: 1.5rem;
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

    ${({ category, board }) =>
    category === "게시판" &&
    board &&
    css`
      font-size: 2rem;
      svg {
        font-size: 2.5rem;
      }
    `}

    ${({ category }) =>
    category === "마이페이지" &&
    css`
      font-size: 1rem;
      font-weight: normal;

      svg {
        margin-right: 1rem;
        font-size: 1.5rem;
        color: #555;
      }
    `}


    ${({ category }) =>
    category === "공지" &&
    css`
      font-size: 1.2rem;

      svg {
        margin-left: 0.3rem;
        font-size: 1rem;
      }
    `}
`;
