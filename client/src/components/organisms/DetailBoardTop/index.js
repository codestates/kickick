import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { IconBox, Profile } from "../../../components";

import { createLikes } from "../../../apis/likes";

import astronautImg from "../../../assets/images/astronaut.svg";
import alienImg from "../../../assets/images/alien.svg";
import star from "../../../assets/images/icon/contenticon.png";

export default function DetailBoardTop({ state, type }) {
  const [astronaut, setAstronaut] = useState(0);
  const [alien, setAlien] = useState(0);

  const handleLike = (item) => {
    if (item === "true" && alien === 1) return;
    if (item === "false" && astronaut === 1) return;

    if (item === "true") {
      setAstronaut(0);
      setAlien(1);
    } else {
      setAstronaut(1);
      setAlien(0);
    }

    // createLikes(state.post_id, item)
    //   .then((data) => console.log(data.data))
    //   .catch((err) => console.log(err.response));
  };

  return (
    <Container>
      <TopContainer>
        <Title>{state.post_name}</Title>
        <UserAndCountContainer>
          <UserContainer>
            <Profile src={state.user.profile} type="post" />
            {state.user.username}
          </UserContainer>
          <UserContainer>
            <IconBox label="count" />
            {state.view_count}
          </UserContainer>
        </UserAndCountContainer>
        <TagContainer>
          {state.tags.map((tag) => (
            <span key={tag.tag_id} style={{ color: "#f15f5f" }}>
              # {tag.content}
            </span>
          ))}
        </TagContainer>
      </TopContainer>
      <Content>
        <ReactQuill value={state.content} readOnly={true} theme={"bubble"} />
      </Content>
      {type === "kick" ? (
        <VotesContainer>
          <Astronaut>
            {astronaut ? <img className="star" src={star} alt="" /> : null}
            <img
              className="astronaut"
              alt=""
              src={astronautImg}
              onClick={() => handleLike("false")}
            />
            <span>{state.likes.false + astronaut}</span>
          </Astronaut>
          <span>vs</span>
          <Alien>
            <span>{state.likes.true + alien}</span>
            <img src={alienImg} onClick={() => handleLike("true")} alt="" />
            {alien ? <img className="star" src={star} alt="" /> : null}
          </Alien>
        </VotesContainer>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  /* width: 60vw; */
`;

const TopContainer = styled.div`
  padding-bottom: 1.5rem;
  border-bottom: 2px dashed #c4c4c4;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem;
`;
const UserAndCountContainer = styled.div`
  display: flex;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: gray;

  img {
    margin-right: 0.5rem;
  }
`;

const TagContainer = styled.div`
  padding: 0.5rem;

  span {
    margin-right: 1rem;
    font-weight: bold;
  }
`;

const Content = styled.div`
  height: auto;
  padding: 2rem 0;
`;

const VotesContainer = styled.div`
  display: flex;
  justify-content: center;

  font-size: 2.2rem;
  font-weight: bold;

  gap: 1rem;
  img {
    width: 2.2rem;
    height: 2.2rem;
    object-fit: contain;
  }
`;

const Astronaut = styled.div`
    position: relative;
  display: flex;
  gap: 0.5rem;
  > .star {
    position: absolute;
    left: -1rem;
    width: 1rem;
    height: 1rem;
  }
  > .astronaut {
    cursor: pointer;
`;

const Alien = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  > .star {
    position: absolute;
    right: -1rem;
    width: 1rem;
    height: 1rem;
  }
  > :nth-child(2) {
    cursor: pointer;
  }
`;
