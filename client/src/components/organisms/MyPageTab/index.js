import React from "react";
import styled from "styled-components";
import TabBox from "../../molecules/TabBox";

const generalNavList = [
  { label: "회원정보", to: "/mypage/profile" },
  { label: "즐겨찾기", to: "/mypage/favorite" },
  { label: "내가 올린 글", to: "/mypage/post" },
  { label: "내가 단 댓글", to: "/mypage/comment" },
  { label: "킥 구매 목록", to: "/mypage/kicklist" },
  { label: "킥머니 로그", to: "/mypage/moneylog" },
  { label: "이벤트 당첨 목록", to: "/mypage/event" },
];

const adminNavList = [
  { label: "유저관리", to: "/mypage/usercontrol" },
  { label: "신고글", to: "/mypage/report" },
];

export default function MyPageTab() {
  return (
    <Container>
      <TabBox list={generalNavList} />
      <TabBox list={adminNavList} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5rem;
`;
