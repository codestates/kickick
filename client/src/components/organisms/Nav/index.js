import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { NavBtn, AlarmBtn, BtnChamber } from "../../../components"
import { signOut } from "../../../apis/auth"
import { useScroll } from "../../../hooks/useScroll"
import { setIsLogin } from "../../../store/actions/login"

export default function Nav({ toggleTheme }) {
  const dispatch = useDispatch();
  const scroll = useScroll();
  const isLogin = useSelector((state) => state.login.isLogin);

  const logoutHanlder = () => {
    signOut().then(() => {
      dispatch(setIsLogin(false));
    });
  };

  return (
    <Container scroll={scroll}>
      <Separation>
        <NavBtn
          context="KICK"
          size="3rem"
          fontFamily={`'Luckiest Guy', cursive`}
          pathname="/"
        />
        <BtnChamber />
      </Separation>
      <Separation>
        <LoginChanger isLogin={!isLogin}>
          <NavBtn context="로그인" pathname="/login" />
          <NavBtn
            context="회원가입"
            pathname="/signup"
            color="#ffffff"
            backgroundColor="#350480"
          />
        </LoginChanger>
        <LoginChanger isLogin={isLogin}>
          <AlarmBtn />
          <NavBtn context="마이페이지" pathname="/mypage/home" />
          <NavBtn
            context="로그아웃"
            pathname="/"
            color="#ffffff"
            func={logoutHanlder}
            backgroundColor="#350480"
          />
        </LoginChanger>
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
  top: ${({ scroll }) => (scroll.scrollDirection === "up" ? "-8rem" : 0)};
  z-index: 999;
  justify-content: space-between;
  width: 100vw;
  height: 4rem;
  background-color: rgb(255, 255, 255, 0.7);
  transition: top 0.5s;
`;

const Separation = styled(VerticalAlign)`
  margin: 0 1rem;
`;

const LoginChanger = styled.div`
  display: ${({isLogin})=> isLogin ? "flex":"none"};
`;