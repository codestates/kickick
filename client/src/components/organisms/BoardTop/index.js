import React from "react";
import styled from "styled-components";

import { useParams } from "react-router";

import spacebackground from "../../../assets/images/space_background.jpg";
import studyplanet from "../../../assets/images/studyplanet.png";
import leisureplanet from "../../../assets/images/leisureplanet.png";
import lifeplanet from "../../../assets/images/lifeplanet.png";
import economyplanet from "../../../assets/images/economyplanet.png";
import travelplanet from "../../../assets/images/travelplanet.png";
import artplanet from "../../../assets/images/artplanet.png";

const list = [
  { label: "study", src: studyplanet, category: "학습", color: "#4aa6c1" },
  { label: "leisure", src: leisureplanet, category: "여가", color: "#DDB362" },
  { label: "life", src: lifeplanet, category: "생활", color: "#5070B6" },
  { label: "economy", src: economyplanet, category: "경제", color: "#DE5C8A" },
  { label: "travel", src: travelplanet, category: "여행", color: "#D04E3E" },
  { label: "art", src: artplanet, category: "예술", color: "#EED548" },
  { label: "", src: "", category: "default", color: "#000000" },
];

export default function BoardTop() {
  const { category } = useParams();
  const { src, label, color } = list.find((el) => el.category === category);

  return (
    <Container image={spacebackground} color={color}>
      {category && (
        <>
          <img src={src} alt="" />
          <span>{label}</span>
        </>
      )}
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
    pointer-events: none;
  }
  span {
    color: #ddd;
    margin-top: 1rem;
    font-family: "Luckiest Guy", cursive;
  }
`;
