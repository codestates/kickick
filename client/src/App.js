import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import useAxios from "./hooks/useAxios";
import { getPostsInfo } from "./apis/posts";
import { light, dark } from "./commons/styles/theme";

import KickBoard from "./pages/KickBoard";
import Nav from './components/organisms/Nav/Nav'
import Main from "./pages/main";
import Login from "./pages/Login"

export default function App() {
  // NOTICE useAxios, api 모듈화 Test 용 밑에꺼 주석 해제후 테스트해보세요
  // const { loading, data, msg, error } = useAxios(getPostsInfo(1));
  // console.log(loading, data, msg, error);

  // NOTICE 아래는 아직 없는 컴포넌트 이지만 로딩중일때 로딩화면이 뜨는 컴포넌트를 사용하는 예시
  // if (loading) return <LoadingSpinner />

  // NOTICE theme 테스트 중
  // ! theme 자체를 바꾸는 것은 nav에서 redux로 처리 하고 App.js 에서는 theme state를 store에서 받아와서 보여준다.
  const [themeMode, setThemeMode] = useState("light"); // 테마 모드 세팅
  const toggleTheme = () =>
    setThemeMode(themeMode === "light" ? "dark" : "light"); // thememode 바꾸기

  const theme = themeMode === "light" ? light : dark; // 테마 환경에 맞는 테마 컬러 가져오기.

  // NOTICE ${({theme}) => theme.paddings.small}
  // NOTICE @media ${({theme}) => theme.device.mobileS} {...}
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Nav toggleTheme={toggleTheme} />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/kickboard" element={<KickBoard />} />
          </Routes>
          <Routes>
            <Route path="/login" element={<Login />} />
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
