import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { useParams } from "react-router";

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

const list = [
  { label: "study", src: study, category: "학습", color: "#4aa6c1" },
  { label: "leisure", src: leisure, category: "여가", color: "#DDB362" },
  { label: "life", src: life, category: "생활", color: "#5070B6" },
  { label: "economy", src: economy, category: "경제", color: "#DE5C8A" },
  { label: "travel", src: trip, category: "여행", color: "#D04E3E" },
  { label: "art", src: art, category: "예술", color: "#EED548" },
  // { label: "", src: "", category: "default", color: "#000000" },
];

export default function BoardTop() {
  const { category } = useParams();
  const { src, label, color } = list.find((el) => el.category === category);
  const [select, setSelect] = useState(0);

  useEffect(() => {
    setSelect(list.findIndex((el) => category === el.category));
  }, [category]);
  return (
    <Container image={spacebackground} color={color}>
      <Lists>
        {category &&
          list.map((el, idx) => {
            return (
              <ListContainer
                style={{
                  marginTop: idx === 0 ? `-${select * 5}rem` : 0,
                }}
              >
                <img src={el.src} alt="" />
                <span>{el.label}</span>
              </ListContainer>
            );
          })}
      </Lists>
    </Container>
  );
  // <Container>
  //   <img className="cloud" src={cloud10} alt="" />
  //   <img className="cloud" src={cloud2} alt="" />
  //   <img className="cloud" src={cloud3} alt="" />
  //   <img className="cloud" src={cloud4} alt="" />
  //   <img className="cloud" src={cloud10} alt="" />
  //   <img className="icon" src={title.image} alt="" />
  //   <Category c={title.color}>{title.label}</Category>
  // </Container>
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 12rem;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  /* background-image: url(${({ image }) => image}); */
  object-fit: cover;
  font-size: 4rem;

  background: linear-gradient(to top, #ffffff, #6dd5fa, #2980b9);

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
  span {
    color: #ddd;
    margin-top: 1rem;
    font-family: "Luckiest Guy", cursive;
    text-shadow: 0.4rem 0.4rem 0.3rem gray;
  }
  img {
    width: 4.5rem;
    height: 4.5rem;
    filter: drop-shadow(0.2rem 0.2rem 0.3rem gray);
    z-index: 5;
  }
`;

const Lists = styled.div`
  position: relative;

  width: 30rem;
  height: 4.8rem;

  overflow: hidden;
`;

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  height: 5rem;

  transition: all 0.5s linear;
`;
