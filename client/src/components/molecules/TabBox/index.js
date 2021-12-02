import React from "react";
import styled from "styled-components";

import Tab from "../../atoms/Tab";

const generalTabList = [
  { label: "프로필 수정", to: "/mypage/profile/edit", category: "회원정보" },
  { label: "출석", to: "/mypage/profile/attendance", category: "회원정보" },
  {
    label: "스크랩 한 글",
    to: "/mypage/activity/favorite",
    category: "나의활동",
  },
  { label: "내가 쓴 글", to: "/mypage/activity/mypost", category: "나의활동" },
  {
    label: "내가 쓴 댓글",
    to: "/mypage/activity/mycomment",
    category: "나의활동",
  },
  { label: "내가 산 킥", to: "/mypage/purchase/kick", category: "구매목록" },
  { label: "킥머니 로그", to: "/mypage/purchase/log", category: "구매목록" },
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
