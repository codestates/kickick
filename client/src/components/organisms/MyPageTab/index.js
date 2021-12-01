import React from "react";

import TabBox from "../../molecules/TabBox";

const generalNavList = [
  "회원정보",
  "즐겨찾기",
  "내가 올린 글",
  "내가 단 댓글",
  "킥 구매 목록",
  "킥머니 로그",
  "이벤트 당첨 목록",
];

const adminNavList = ["유저 관리", "신고글"];

export default function MyPageTab() {
  return (
    <>
      <TabBox list={generalNavList} />
      <TabBox list={adminNavList} />
    </>
  );
}
