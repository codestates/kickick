import React from "react";
import styled from "styled-components";

import NavBtn from "../../atoms/Button/NavBtn";
import BtnChamber from "../../molecules/BtnChamber/BtnChamber"

export default function Nav({ toggleTheme }) {
  return (
    <Container>
      <Separation>
        <NavBtn
          context="KICK"
          size="3rem"
          fontFamily={`'Luckiest Guy', cursive`}
        />
        <BtnChamber />
      </Separation>
      <Separation>
        <NavBtn context="로그인" />
        <NavBtn context="회원가입" color="#ffffff" backgroundColor="#350480" />
      </Separation>
    </Container>
  );
}

const VerticalAlign = styled.div`
  display: flex;
  align-items: center;
`;

const Container = styled(VerticalAlign)`
  position: fixed;
  top: 0;
  z-index: 999;
  justify-content: space-between;
  width: 100vw;
  height: 4rem;
  background-color: rgb(255, 255, 255, 0.7);
`;

const Separation = styled(VerticalAlign)`
  margin: 0 1rem;
`;