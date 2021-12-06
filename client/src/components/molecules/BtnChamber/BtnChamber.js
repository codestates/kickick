import React, { useState } from "react";
import styled from "styled-components";

import { NavBtn } from "../../../components";

export default function BtnChamber({ setUpdate }) {
  // nav에 있어서 클릭하면 해당 페이지로 이동하는 버튼들의 모음집
  const list = [
    { pathname: "intro", context: "소개", isSubNav: false },
    { pathname: "notice", context: "공지", isSubNav: false },
    { pathname: "board", context: "게시판", isSubNav: true },
    { pathname: "kickboard", context: "킥 배우기", isSubNav: true },
  ];

  const [isHover, setIsHover] = useState("");

  return (
    <Container>
      {list.map((el) => (
        <NavBtn
          context={el.context}
          pathname={el.pathname}
          size="1.4rem"
          key={el.context}
          isSubNav={el.isSubNav}
          isHover={isHover}
          setIsHover={setIsHover}
          setUpdate={setUpdate}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  cursor: pointer;
`;
