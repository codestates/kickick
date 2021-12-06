import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import KickBoard from "./pages/KickBoard";
import { Nav } from "./components";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MailAuth from "./pages/Signup/MailAuth";
import Board from "./pages/Board";
import EditBoard from "./pages/EditBoard";
import DetailBoard from "./pages/DetailBoard";
import MyEditBoard from "./pages/MyEditBoard";
import MyPage from "./pages/MyPage";

import { light, dark } from "./commons/styles/theme";

export default function App() {
  const [themeMode, setThemeMode] = useState("light"); // 테마 모드 세팅
  const theme = themeMode === "light" ? light : dark; // 테마 환경에 맞는 테마 컬러 가져오기.

  const toggleTheme = () =>
    setThemeMode(themeMode === "light" ? "dark" : "light"); // thememode 바꾸기

  const [boardCategory, setBoardCategory] = useState("학습_자유"); //

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Nav toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="editboard"
              element={<EditBoard boardCategory={boardCategory} />}
            />
            <Route
              path="myeditboard/:post_id"
              element={<MyEditBoard boardCategory={boardCategory} />}
            />
            <Route path="kickboard" element={<KickBoard />} />
            <Route
              path="board"
              element={<Board boardCategory={boardCategory} />}
            />
            <Route path="detailboard/:post_id" element={<DetailBoard />} />
            <Route path="kickboard" element={<KickBoard />} />
            <Route path="mypage/:category" element={<MyPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/:username" element={<MailAuth />} />
          </Routes>
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
