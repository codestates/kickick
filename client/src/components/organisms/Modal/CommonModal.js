import React from "react";
import { useLocation } from "react-router-dom"
import styled from "styled-components";

import { FirstEnter } from "../../../components";

export default function CommonModal() {
  const location = useLocation();
  const modalName = location.pathname.split("/")[2];
  return <Container>{modalName === "firstenter" ? <FirstEnter/> : null}</Container>;
}

const Container = styled.div`
  position:fixed;
  top:0;
  left:0;
  display:flex;
  justify-content:center;
  align-items:center;
  width:100vw;
  height:100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index:9999999;
`;
