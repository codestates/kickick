import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import KickBoard from "./pages/KickBoard";
import { Nav, Footer } from "./components";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignupSelect from "./pages/Signup/SignupSelect";
import Signup from "./pages/Signup";
import MailAuth from "./pages/Signup/MailAuth";
import Board from "./pages/Board/Board";
import DetailBoard from "./pages/Board/DetailBoard";
import EditBoard from "./pages/Board/EditBoard";
import MyEditBoard from "./pages/Board/MyEditBoard";
import MyPage from "./pages/MyPage";
import Notice, { NoticeDetail } from "./pages/Notice";

import { light, dark } from "./commons/styles/theme";
import { nowImLogin } from "./apis/auth";
import {
  isLoginAction,
  todayLoginAction,
  isPointAction,
} from "./store/actions/login";
import lightToDark from "./assets/images/lightToDark.png";
import darkToLight from "./assets/images/darkToLight.png";

export default function App() {
  // NOTICE theme 테스트 중
  // ! theme 자체를 바꾸는 것은 nav에서 redux로 처리 하고 App.js 에서는 theme state를 store에서 받아와서 보여준다.
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const todayLogin = useSelector((state) => state.login.todayLogin);
  const themeMode = useSelector((state) => state.themeMode);
  const [theme, setTheme] = useState([light, "light"]);

  useEffect(() => {
    setTimeout(() => {
      if (themeMode === "light") {
        setTheme([light, "light"]);
      } else setTheme([dark, "dark"]);
    }, 580);

    nowImLogin(todayLogin)
      .then((res) => {
        if (res.data.message !== "guest login") {
          dispatch(isLoginAction(true));
          dispatch(isPointAction(res.data.data.kick_money));
          if (todayLogin) dispatch(todayLoginAction(true));
        }
        if (res.data.message === "guest login") {
          dispatch(isLoginAction("guest"));
          dispatch(isPointAction(res.data.data.kick_money));
        }
      })
      .catch(() => dispatch(isLoginAction(false)));
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme[0]}>
      <Router>
        <ScrollToTop />
        <Container>
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
          <Nav themeCode={theme[1]} setUpdate={setUpdate} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupSelect />} />
            <Route path="/signup/:type" element={<Signup />} />
            <Route path="/mailauth/:username" element={<MailAuth />} />
            <Route path="editboard/:category" element={<EditBoard />} />
            <Route
              path="myeditboard/:category/:post_id"
              element={<MyEditBoard />}
            />
            <Route path="kickboard" element={<KickBoard />} />
            <Route
              path="board/:category"
              element={<Board setUpdate={setUpdate} update={update} />}
            />
            <Route path="detailboard/:post_id" element={<DetailBoard />} />
            <Route path="mypage/:category" element={<MyPage />} />
            <Route path="notice/:category" element={<Notice />}>
              <Route path=":notice_id" element={<NoticeDetail />} />
            </Route>
          </Routes>
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const Container = styled.div`
  position: relative;
  width: 100vw;
  max-width: 100%;
  min-height: calc(100vh - 4rem);
  margin-top: 4rem;
  background-color: ${({ theme }) => theme.color.back};
`;

const Theme = styled.img`
  position: relative;
  height: 100vh;
`;

const DarkBox = styled.div`
  width: 110vw;
  height: 100vh;
  background-color: black;
`;

const ModeChanger = styled.div`
  position: absolute;
  top: -4rem;
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
