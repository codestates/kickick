import React from "react";
import styled from "styled-components";

import NavBtn from '../../atoms/Button/NavBtn'

export default function BtnChamber() {
  // nav에 있어서 클릭하면 해당 페이지로 이동하는 버튼들의 모음집
  const list = [
    { pathname: "intro", context: "소개" },
    { pathname: "notice", context: "공지" },
    { pathname: "board/학습", context: "게시판" },
    { pathname: "kickboard/학습", context: "킥 배우기" },
  ];
  return (
    <Container>
      {list.map((el) => (
        <NavBtn
          context={el.context}
          pathname={el.pathname}
          size="1.4rem"
          key={el.context}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display:flex;
  cursor: pointer;
`;
