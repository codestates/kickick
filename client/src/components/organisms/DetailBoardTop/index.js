import React from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { IconBox, Profile, Thumbnail, Vote } from "../../../components";

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
            <span key={tag.tag_id}># {tag.content}</span>
          ))}
        </TagContainer>
      </TopContainer>
      <Content>
        {type === "kick" ? (
          <>
            <Thumbnail src={postInfo.kick.thumbnail} />
            <blockquote>{postInfo.content}</blockquote>
            <ReactQuill
              value={postInfo.kick_content}
              readOnly={true}
              theme={"bubble"}
            />
          </>
        ) : (
          <ReactQuill
            value={postInfo.content}
            readOnly={true}
            theme={"bubble"}
          />
        )}
      </Content>
      {type === "kick" && (
        <Vote
          likes={postInfo.likes}
          is_liked={postInfo.is_liked}
          postId={postInfo.post_id}
        />
      )}
    </Container>
  );
}

const Container = styled.div``;

const TopContainer = styled.div`
  padding-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 2.8rem;
  font-weight: bold;
  padding: 0.5rem;
`;
const UserAndCountContainer = styled.div`
  display: flex;
  margin-top: 1rem;
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
    color: #f15f5f;
    padding: 0.3rem 0.5rem;
    background: #ececec;
    border-radius: 0.5rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: auto;
  padding: 2rem 0;
  blockquote {
    font-size: 1.2rem;
    font-style: italic;
    color: gray;
    padding: 1.5rem;
    background: #fafafa;
    border-left: 3px solid #0c0c42;
  }
`;
