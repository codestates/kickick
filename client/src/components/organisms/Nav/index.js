import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { NavBtn, AlarmBtn, BtnChamber } from "../../../components";
import { signOut } from "../../../apis/auth";
import { useScroll } from "../../../hooks/useScroll";
import { isLoginAction } from "../../../store/actions/login";
import { themeModeAction } from "../../../store/actions/nav";

export default function Nav({ setUpdate }) {
  const dispatch = useDispatch();
  const scroll = useScroll();
  const isLogin = useSelector((state) => state.login.isLogin);
  const themeMode = useSelector((state) => state.themeMode);
  const [isHover, setIsHover] = useState(false);

  const logoutHanlder = () => {
    signOut().then(() => {
      dispatch(isLoginAction(false));
    });
  };

  const themeChanger = () => {
    if (themeMode === "light") dispatch(themeModeAction("dark"));
    else dispatch(themeModeAction("dark"));
  };
  console.log(themeMode);
  return (
    <Container
      onMouseOver={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Frame scroll={scroll} isHover={isHover}>
        <Separation>
          <NavBtn
            context="KICK"
            size="3rem"
            fontFamily={`'Luckiest Guy', cursive`}
            pathname="/"
          />
          <BtnChamber setUpdate={setUpdate} />
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
      </Frame>
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
  width: 100vw;
  height: 4rem;
  z-index: 999;
`;

const Frame = styled(VerticalAlign)`
  position: relative;
  top: ${({ scroll, isHover }) =>
    scroll.scrollDirection === "up" && !isHover ? "-8rem" : 0};
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
  display: ${({ isLogin }) => (isLogin ? "flex" : "none")};
`;
