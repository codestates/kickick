import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import astronautImg from "../../../assets/images/astronaut2.png";
import alienImg from "../../../assets/images/alien1.png";
import thumbnail from "../../../assets/images/default_thumbnail.jpg";
import star from "../../../assets/images/contenticon.png";

import { createLikes } from "../../../apis/likes";
import { IconBox } from "../../";

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
        {type === "kick" ? (
          <Thumbnail>
            <img src={thumbnail} />
          </Thumbnail>
        ) : null}
        <UserAndCountContainer>
          <UserContainer>
            <IconBox label="user" />
            {state.user.username}
          </UserContainer>
          <UserContainer>
            <IconBox label="count" />
            {state.view_count}
          </UserContainer>
        </UserAndCountContainer>
        {type === "kick" ? null : (
          <TagContainer>
            <span>태그</span>
            {state.tags.map((tag) => (
              <span key={tag.tag_id} style={{ color: "#f15f5f" }}>
                # {tag.content}
              </span>
            ))}
          </TagContainer>
        )}
      </TopContainer>
      <Content>
        <ReactQuill value={state.content} readOnly={true} theme={"bubble"} />
      </Content>
      {type === "kick" ? (
        <VotesContainer>
          <Astronaut>
            {astronaut ? <img className="star" src={star} /> : null}
            <img
              className="astronaut"
              src={astronautImg}
              onClick={() => handleLike("false")}
            />
            <span>{state.likes.false + astronaut}</span>
          </Astronaut>
          <span>vs</span>
          <Alien>
            <span>{state.likes.true + alien}</span>
            <img src={alienImg} onClick={() => handleLike("true")} />
            {alien ? <img className="star" src={star} /> : null}
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
  margin-right: 8rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

const TagContainer = styled.div`
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  span {
    margin-right: 1rem;
    font-weight: bold;
  }
`;

const Content = styled.div`
  height: auto;
  padding: 2rem 1rem;
`;

const Thumbnail = styled.div`
  height: 15rem;
  padding: 0.5rem;
  margin-bottom: 2rem;
  img {
    width: 100%;
    height: inherit;

    border-radius: 20px;
    object-fit: fill;
  }
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
