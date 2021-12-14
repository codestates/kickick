import React, { useState } from "react";
import styled from "styled-components";

import Alien from "../../../assets/images/alien.svg";
import Astronaut from "../../../assets/images/astronaut.svg";
import { createLikes } from "../../../apis/likes";

export default function Vote({ likes, is_liked, postId }) {
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
      <div>
        <img src={Alien} onClick={() => handleClick("true")} alt="" />
        <span className="vote alien">괴짜 {alien}</span>
      </div>
      <div>
        <span className="vote astronaut">혁신 {astronaut}</span>
        <img src={Astronaut} onClick={() => handleClick("false")} alt="" />
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
  }
  .vote {
    border-radius: 0.5rem;
    padding: 0.3rem;
    font-size: 1rem;
  }
  .alien {
    color: green;
    border: 2px solid green;
  }
  .astronaut {
    color: blue;
    border: 2px solid blue;
  }
`;
