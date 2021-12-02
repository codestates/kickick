import React from "react";
import styled from "styled-components";
import sampleImg from "../../../assets/images/landscape.jpg";

export default function Landscape() {
  return <Container src={sampleImg} alt="" />;
}

const Container = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
`;
