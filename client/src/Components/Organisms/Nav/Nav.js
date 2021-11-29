import React from "react";
import styled from "styled-components";

import NavBtn from "../../Atoms/Button/NavBtn";
import BtnChamber from "../../Molecules/BtnChamber/BtnChamber"

export default function Nav() {

  return (
    <Container>
      <Separation>
        <NavBtn
          context="KICK"
          size="2rem"
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
  justify-content: space-between;
  width: 100vw;
  background-color: yellow;
`;

const Separation = styled(VerticalAlign)``;