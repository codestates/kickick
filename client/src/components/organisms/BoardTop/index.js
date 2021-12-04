import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import spacebackground from "../../../assets/images/space_background.jpg";
import study from "../../../assets/images/studyplanet.png";

export default function BoardTop() {
  const state = useSelector((state) => state.board);
  return (
    <Container image={spacebackground}>
      <img src={study} alt="" />
      <span>study</span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  background-image: url(${({ image }) => image});
  height: 8rem;
  object-fit: cover;

  font-size: 4rem;

  img {
    width: 4.5rem;
    height: 4.5rem;
  }
  span {
    color: #4aa6c1;
    margin-top: 1rem;
    font-family: "Luckiest Guy", cursive;
  }
`;
