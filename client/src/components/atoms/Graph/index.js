import React, { useState } from "react";
import styled, { css } from "styled-components";

import Alien from "../../../assets/images/alien.svg";
import Astronaut from "../../../assets/images/astronaut.svg";
import { createLikes } from "../../../apis/likes";

export default function Vote({ likes, is_liked, postId }) {
  const [alien, setAlien] = useState(likes.true);
  const [astronaut, setAstronaut] = useState(likes.false);
  const [type, setType] = useState(is_liked);

  const handleClick = (item) => {
    if (item === "true" && type === true) return;
    if (item === "false" && type === false) return;

    if (item === "true") {
      setAstronaut(astronaut === 0 ? 0 : astronaut - 1);
      setAlien(alien + 1);
      setType(true);
    } else {
      setAstronaut(astronaut + 1);
      setAlien(alien === 0 ? 0 : alien - 1);
      setType(false);
    }

    createLikes(postId, item).catch((err) => console.log(err.response));
  };
  return (
    <Container type={type}>
      <img src={Alien} onClick={() => handleClick("true")} alt="" />
      <span className="vote alien">괴짜 {alien}</span>
      <span>VS</span>
      <span className="vote astronaut">혁신 {astronaut}</span>
      <img src={Astronaut} onClick={() => handleClick("false")} alt="" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 550;

  img {
    width: 2.5rem;
    height: 2.5rem;
    cursor: pointer;
  }
  .vote {
    border-radius: 0.5rem;
    padding: 0.5rem;
    font-size: 1rem;
  }
  .alien {
    color: #d3e4cd;
    border: 2px solid #d3e4cd;
    ${({ type }) =>
      type === true &&
      css`
        color: green;
        border: 2px solid green;
      `}
  }
  .astronaut {
    color: #a2d2ff;
    border: 2px solid #a2d2ff;
    ${({ type }) =>
      type === false &&
      css`
        color: blue;
        border: 2px solid blue;
      `}
  }
`;
