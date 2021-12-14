import React, { useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { IconBox, Profile, AlienPortion } from "../../../components";

export default function DetailBoardTop({ postInfo, type }) {
  return (
    <Container>
      <TopContainer>
        <Title>{postInfo.post_name}</Title>
        <UserAndCountContainer>
          <UserContainer>
            <Profile src={postInfo.user.profile} type="post" />
            {postInfo.user.username}
          </UserContainer>
          <UserContainer>
            <IconBox label="count" />
            {postInfo.view_count}
          </UserContainer>
        </UserAndCountContainer>
        <TagContainer>
          {postInfo.tags.map((tag) => (
            <span key={tag.tag_id} style={{ color: "#f15f5f" }}>
              # {tag.content}
            </span>
          ))}
        </TagContainer>
      </TopContainer>
      <Content>
        {type === "kick" ? (
          <ReactQuill
            value={postInfo.kick_content}
            readOnly={true}
            theme={"bubble"}
          />
        ) : (
          <ReactQuill
            value={postInfo.content}
            readOnly={true}
            theme={"bubble"}
          />
        )}
      </Content>
      {type === "kick" ? (
        <VotesContainer>
          <AlienPortion
            likes={postInfo.likes}
            is_liked={postInfo.is_liked}
            postId={postInfo.post_id}
          />
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
  color: ${({ theme }) => theme.color.font};
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
  color: ${({ theme }) => theme.color.font};
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
