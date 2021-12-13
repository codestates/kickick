import React, { useState } from "react";
import styled from "styled-components";

import Alien from "../../../assets/images/alien.svg";
import Astronaut from "../../../assets/images/astronaut.svg";
import { createLikes } from "../../../apis/likes";

export default function AlienPortion({ likes, is_liked, postId }) {
  const [alien, setAlien] = useState(likes.true + 1);
  const [astronaut, setAstronaut] = useState(likes.false + 1);

  const handleClick = (item) => {
    if (item === "true" && is_liked === "true") return;
    if (item === "false" && is_liked === "false") return;

    if (item === "true") {
      setAstronaut(0);
      setAlien(1);
    } else {
      setAstronaut(1);
      setAlien(0);
    }

    createLikes(postId, item)
      .then((data) => console.log(data))
      .catch((err) => console.log(err.response));
  };

  return (
    <Container>
      <img src={Alien} onClick={() => handleClick("true")} />
      <Portion alien={alien} astronaut={astronaut}>
        <div></div>
        <div></div>
        <div></div>
      </Portion>
      <img src={Astronaut} onClick={() => handleClick("false")} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
`;

const Portion = styled.div`
  display: flex;
  align-items: center;
  div {
    height: 1rem;
  }
  > :nth-child(1) {
    width: 5rem;
    background: red;
    flex: ${({ alien }) => alien};
  }
  > :nth-child(2) {
    width: 1rem;
    background: linear-gradient(to right, red, blue);
  }
  > :nth-child(3) {
    width: 5rem;
    background: blue;
    flex: ${({ astronaut }) => astronaut};
  }
`;
