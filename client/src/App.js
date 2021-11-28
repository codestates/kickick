import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Pages/Main";
import useAxios from "./hooks/useAxios";
import { getPostsInfo } from "./api/posts";

export default function App() {
  // NOTICE useAxios, api 모듈화 Test 용 밑에꺼 주석 해제후 테스트해보세요
  // const { loading, data, msg, error } = useAxios(getPostsInfo(1));
  // console.log(loading, data, msg, error);

  // NOTICE 아래는 아직 없는 컴포넌트 이지만 로딩중일때 로딩화면이 뜨는 컴포넌트를 사용하는 예시
  // if (loading) return <LoadingSpinner />
  return (
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;
