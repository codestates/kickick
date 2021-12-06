import React, { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import KickBoard from "./pages/KickBoard";
import { Nav, Footer } from "./components";
import Main from "./pages/Main";
import Login from "./pages/Login";
import SignupSelect from "./pages/Signup/SignupSelect";
import Signup from "./pages/Signup";
import MailAuth from "./pages/Signup/MailAuth";
import Board from "./pages/Board";
import EditBoard from "./pages/EditBoard";
import DetailBoard from "./pages/DetailBoard";
import MyPage from "./pages/MyPage";

import { light, dark } from "./commons/styles/theme";
import { nowImLogin } from "./apis/auth";
import { isLoginAction, todayLoginAction } from "./store/actions/login";

export default function App() {
  // NOTICE theme 테스트 중
  // ! theme 자체를 바꾸는 것은 nav에서 redux로 처리 하고 App.js 에서는 theme state를 store에서 받아와서 보여준다.

  const dispatch = useDispatch();
  const todayLogin = useSelector((state) => state.login.todayLogin);
  const themeMode = useSelector((state) => state.themeMode);
  const theme = themeMode === "light" ? light : dark; // 테마 환경에 맞는 테마 컬러 가져오기.

  useEffect(() => {
    nowImLogin(todayLogin)
      .then(() => {
        dispatch(isLoginAction(true));
        if (todayLogin) dispatch(todayLoginAction(true));
      })
      .catch(() => dispatch(isLoginAction(false)));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupSelect />} />
            <Route path="/signup/:type" element={<Signup />} />
            <Route path="/signup/:username" element={<MailAuth />} />
            <Route path="kickboard" element={<KickBoard />} />
            <Route path="board" element={<Board />} />
            <Route path="editboard" element={<EditBoard />} />
            <Route path="detailboard/:post_id" element={<DetailBoard />} />
            <Route path="mypage/:category" element={<MyPage />} />
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
  max-width: 100%;
  min-height: calc(100vh - 4rem);
  margin-top: 4rem;
`;
