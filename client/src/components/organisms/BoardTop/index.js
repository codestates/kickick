import React from "react";
import styled from "styled-components";

import cloud2 from "../../../assets/images/cloud/cloud2.png";
import cloud3 from "../../../assets/images/cloud/cloud3.png";
import cloud4 from "../../../assets/images/cloud/cloud4.png";
import cloud10 from "../../../assets/images/cloud/cloud10.png";
import study from "../../../assets/images/planet/studyplanet.png";
import leisure from "../../../assets/images/planet/leisure.png";
import life from "../../../assets/images/planet/life.png";
import economy from "../../../assets/images/planet/economy.png";
import trip from "../../../assets/images/planet/trip.png";
import art from "../../../assets/images/planet/art.png";
import spacebackground from "../../../assets/images/space_background.jpg";

export default function BoardTop({ list, category }) {
  const titleArr = [
    { label: "study", image: study, color: "#4aa6c1" },
    { label: "leisure", image: leisure, color: "#4369b0" },
    { label: "life", image: life, color: "#d04d36" },
    { label: "economy", image: economy, color: "#eed548" },
    { label: "trip", image: trip, color: "#f29049" },
    { label: "art", image: art, color: "#deb462" },
  ];
  const idx = list.findIndex((el) => el === category);
  const title = titleArr[idx];
  return (
    // <Container image={spacebackground}>
    <Container>
      <img className="cloud" src={cloud10} alt="" />
      <img className="cloud" src={cloud2} alt="" />
      <img className="cloud" src={cloud3} alt="" />
      <img className="cloud" src={cloud4} alt="" />
      <img className="cloud" src={cloud10} alt="" />
      <img className="icon" src={title.image} alt="" />
      <Category c={title.color}>{title.label}</Category>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  /* background-image: url(${({ image }) => image}); */
  height: 8rem;
  object-fit: cover;
  font-size: 4rem;

  pointer-events: none !important;

  > :nth-child(1) {
    left: 5rem;
    bottom: 1rem;
  }
  > :nth-child(2) {
    left: 27rem;
    top: 1rem;
  }
  > :nth-child(3) {
    right: 30rem;
  }
  > :nth-child(4) {
    right: 10rem;
    top: 1rem;
  }
  > :nth-child(5) {
    bottom: 0;
    z-index: 1;
  }
  .cloud {
    position: absolute;
    height: 4.5rem;
  }
  .icon {
    width: 4.5rem;
    height: 4.5rem;
    filter: drop-shadow(0.5rem 0.5rem 0.3rem gray);
    z-index: 5;
  }
`;

const Category = styled.span`
  margin-top: 1rem;
  font-family: "Luckiest Guy", cursive;
  text-shadow: 0.4rem 0.4rem 0.3rem gray;
  color: ${({ c }) => c};
  z-index: 5;
`;
