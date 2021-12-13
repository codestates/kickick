import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { io } from "socket.io-client";

import { Nav, Footer, PageUp, CommonModal } from "./components";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignupSelect from "./pages/Signup/SignupSelect";
import Signup from "./pages/Signup";
import MailAuth from "./pages/Signup/MailAuth";
import Board from "./pages/Board/Board";
import DetailBoard from "./pages/Board/DetailBoard";
import EditBoard from "./pages/Board/EditBoard";
import MyEditBoard from "./pages/Board/MyEditBoard";
import KickBoard from "./pages/KickBoard";
import DetailKickBoard from "./pages/KickBoard/DetailKickBoard";
import EditKickBoard from "./pages/KickBoard/EditKickBoard";
import MyPage from "./pages/MyPage";
import Notice, { NoticeDetail } from "./pages/Notice";
import Error from "./pages/Error/Page404";
import KakaoAuth from "./pages/Login/KakaoAuth";
import NaverAuth from "./pages/Login/NaverAuth";

import { light, dark } from "./commons/styles/theme";
import { nowImLogin } from "./apis/auth";
import {
  isLoginAction,
  todayLoginAction,
  isPointAction,
} from "./store/actions/login";
import { alarmListAction } from "./store/actions/nav";
import lightToDark from "./assets/images/lightToDark.png";
import darkToLight from "./assets/images/darkToLight.png";

export default function App() {
  const dispatch = useDispatch();
  const socketClient = io("http://localhost:4000");
  const isLogin = useSelector((state) => state.login.isLogin);
  const todayLogin = useSelector((state) => state.login.todayLogin);
  const themeMode = useSelector((state) => state.themeMode);
  const socketChange = useSelector((state) => state.socket);
  const [theme, setTheme] = useState([light, "light"]);

  useEffect(() => {
    setTimeout(() => {
      if (themeMode === "light") {
        setTheme([light, "light"]);
      } else setTheme([dark, "dark"]);
    }, 580);

    nowImLogin(todayLogin)
      .then((res) => {
        const loginData = { ...res.data.data };
        delete loginData.kick_money;
        dispatch(isLoginAction(loginData));
        dispatch(isPointAction(res.data.data.kick_money));
        if (!todayLogin) dispatch(todayLoginAction(true));
      })
      .catch(() => dispatch(isLoginAction(false)));
  }, [themeMode]);

  socketClient.on("connect", () => {
    // console.log("connection server");

    socketClient.emit("signin", {
      username: isLogin.username,
      ...socketChange.alarmPage,
    });

    socketClient.on("alarms", (data) => {
      // console.log("난 1이야", data);
      dispatch(alarmListAction(data));
    });

    socketClient.on("disconnect", () => {
      console.log("disconnection");
    });

    socketClient.emit("alarms", {
      username: isLogin.username,
      ...socketChange.alarmPage,
    });
  });
  
  

  return (
    <ThemeProvider theme={theme[0]}>
      <Router>
        <Container>
          <PageUp />
          {themeMode === "light" ? (
            <LightChanger themeMode={themeMode}>
              <DarkBox />
              <Theme src={darkToLight} />
            </LightChanger>
          ) : (
            <DarkChanger themeMode={themeMode}>
              <Theme src={lightToDark} />
              <DarkBox />
            </DarkChanger>
          )}
          <Nav themeCode={theme[1]} socketClient={socketClient} />
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="kakao" element={<KakaoAuth />} />
              <Route path="naver" element={<NaverAuth />} />
              <Route path="modal/:modal" element={<CommonModal />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignupSelect />} />
            <Route path="signup/:type" element={<Signup />} />
            <Route path="mailauth/:username" element={<MailAuth />} />
            <Route path="board/:category" element={<Board />} />
            <Route path="detailboard/:post_id" element={<DetailBoard />} />
            <Route path="editboard/:category" element={<EditBoard />} />
            <Route
              path="myeditboard/:category/:post_id"
              element={<MyEditBoard />}
            />
            <Route path="kickboard/:category" element={<KickBoard />} />
            <Route path="detailkick" element={<DetailKickBoard />} />
            <Route path="editkick/:category" element={<EditKickBoard />} />
            <Route path="mypage/:category" element={<MyPage />} />
            <Route path="notice/:category" element={<Notice />}>
              <Route path=":notice_id" element={<NoticeDetail />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}
const Container = styled.div`
  position: relative;
  width: 100vw;
  /* max-width: 100%; */
  min-height: calc(100vh - 4rem);
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.color.back};
`;

const Theme = styled.img`
  position: relative;
  height: 100vh;
`;

const DarkBox = styled.div`
  position: relative;
  width: 110vw;
  height: 100vh;
  background-color: black;
`;

const ModeChanger = styled.div`
  position: fixed;
  top: 0rem;
  right: 100vw;
  display: flex;
  z-index: 99999;
  animation-name: slide;
  animation-direction: normal;
  animation-iteration-count: 1;

  @keyframes slide {
    0% {
      right: -210vw;
    }
    100% {
      right: 100vw;
    }
  }
`;

const LightChanger = styled(ModeChanger)`
  animation-duration: 2s;
`;

const DarkChanger = styled(ModeChanger)`
  animation-duration: 2.2s;
`;
