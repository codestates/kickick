import React from 'react';
import styled from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './Pages/Main'
import Nav from './Components/Organisms/Nav/Nav'

export default function App () {
  return (
    <Router>
      <Container>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <Main/>
            }
          />
        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
  position:relative;
  width:100vw;
  min-height:100vh;
  margin-top:5rem;
`