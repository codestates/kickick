import React from "react";
import styled from "styled-components";

import MyPageTab from "../../atoms/Tab";

export default function TabBox({
  list = [
    "회원정보",
    "즐겨찾기",
    "내가 올린 글",
    "내가 단 댓글",
    "킥 구매 목록",
    "킥머니 로그",
    "이벤트 당첨 목록",
  ],
}) {
  return (
    <Conatiner>
      {list.map((el) => (
        <MyPageTab label={el} key={el} />
      ))}
    </Conatiner>
  );
}

const Conatiner = styled.div`
  width: 15rem;

  border: 1px solid #dddddd;
`;
