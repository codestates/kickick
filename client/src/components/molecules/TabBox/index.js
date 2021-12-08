import React from "react";
import styled from "styled-components";

import { Tab } from "../../../components";

import {
  PROFILE,
  ATTENDANCE,
  FAVORITES,
  MY_POST,
  MY_COMMENT,
} from "../../../commons/constants/mypage";

const generalTabList = [
  { label: PROFILE, to: "/mypage/profile", category: "회원정보" },
  { label: ATTENDANCE, to: "/mypage/attendance", category: "회원정보" },
  {
    label: FAVORITES,
    to: "/mypage/favorites",
    category: "나의활동",
  },
  { label: MY_POST, to: "/mypage/mypost", category: "나의활동" },
  {
    label: MY_COMMENT,
    to: "/mypage/mycomment",
    category: "나의활동",
  },
  { label: "내가 산 킥", to: "/mypage/kick", category: "구매목록" },
  { label: "킥머니 로그", to: "/mypage/log", category: "구매목록" },
];

const adminTabList = [
  { label: "유저관리", to: "/mypage/usercontrol" },
  { label: "신고글", to: "/mypage/report" },
];

export default function TabBox({ category }) {
  const list = generalTabList.filter((l) => l.category === category);

  return (
    <Conatiner>
      {list.map((el) => (
        <Tab label={el.label} to={el.to} key={el.label} />
      ))}
    </Conatiner>
  );
}

const Conatiner = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
