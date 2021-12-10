import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { IconBox } from "../../";

export default function DetailBoardTop({ state }) {
  return (
    <Container>
      <TopContainer>
        <Title>{state.post_name}</Title>
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
        <TagContainer>
          <span>태그</span>
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
