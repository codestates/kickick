import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { NavBtn, AlarmBtn, BtnChamber } from "../../../components";
import { signOut } from "../../../apis/auth";
import { useScroll } from "../../../hooks/useScroll";
import { isLoginAction, isPointAction } from "../../../store/actions/login";
import { themeModeAction } from "../../../store/actions/nav";
import sun from "../../../assets/images/sun.png";
import moon from "../../../assets/images/moon.png";

export default function Nav({ themeCode, setUpdate }) {
  const dispatch = useDispatch();
  const scroll = useScroll();
  const isLogin = useSelector((state) => state.login.isLogin);
  const themeMode = useSelector((state) => state.themeMode);
  const userPoint = useSelector((state) => state.login.isPoint);
  const themeImg = [sun, moon];
  const [isHover, setIsHover] = useState(false);

  const logoutHanlder = () => {
    signOut().then(() => {
      dispatch(isLoginAction(false));
      dispatch(isPointAction(false));
    });
  };

  const themeChanger = () => {
    if (themeMode === "light") dispatch(themeModeAction("dark"));
    else dispatch(themeModeAction("light"));
  };
  
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
          <ThemeBtn
            src={themeCode === "light" ? themeImg[0] : themeImg[1]}
            onClick={themeChanger}
            alt="themeBtn"
          />
          <LoginChanger isLogin={userPoint !== false}>
            <Point>{`${userPoint} P`}</Point>
          </LoginChanger>
          <LoginChanger isLogin={isLogin === false || isLogin.type === "guest"}>
            <NavBtn context="로그인" pathname="/login" />
            <NavBtn
              context="회원가입"
              pathname="/signup"
              color="#ffffff"
              backgroundColor="#350480"
            />
          </LoginChanger>
          <LoginChanger isLogin={isLogin && isLogin.type !== "guest"}>
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

const Point = styled.div`
  margin: 0.2rem;
  font-family: ${({ theme }) => theme.fontFamily.jua};
`;

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
  background-color: ${({ theme }) => theme.color.back};
  /* background-color: rgb(255, 255, 255, 0.7); */
  transition: top 0.5s;
`;

const Separation = styled(VerticalAlign)`
  margin: 0 1rem;
`;

const LoginChanger = styled.div`
  display: ${({ isLogin }) => (isLogin ? "flex" : "none")};
`;

const ThemeBtn = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  margin-right: 0.3rem;
  border-radius: 3rem;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
