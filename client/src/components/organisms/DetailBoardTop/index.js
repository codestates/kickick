import React from "react";
import styled from "styled-components";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { Profile, Thumbnail, Vote } from "../../../components";

export default function DetailBoardTop({ postInfo, type, themeCode }) {
  console.log(postInfo);
  return (
    <Container>
      <TopContainer>
        <Title>{postInfo.post_name}</Title>
        <UserAndCountContainer>
          <UserContainer>
            <Profile src={postInfo.user.profile} type="post" />
            {postInfo.user.username}
          </UserContainer>
          <CountContainer>
            <span>
              게시일 <strong>{postInfo.created_at.split("T")[0]}</strong>
            </span>
            <span>
              조회<strong>{postInfo.view_count}</strong>
            </span>
            <span>
              {type === "kick" ? (
                <>
                  추천수 <strong>{postInfo.like_count}</strong>
                </>
              ) : (
                <>
                  좋아요 <strong>{postInfo.favorite_count}</strong>
                </>
              )}
            </span>
          </CountContainer>
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
              value={postInfo.main_content || ""}
              readOnly={true}
              theme={"bubble"}
              style={{ color: themeCode === "light" ? "#222" : "#fff" }}
            />
          </>
        ) : (
          <ReactQuill
            value={postInfo.content}
            readOnly={true}
            theme={"bubble"}
            style={{ color: themeCode === "light" ? "#222" : "#fff" }}
          />
        )}
      </Content>
      {type === "kick" && (
        <Vote
          likes={postInfo.likes}
          is_liked={postInfo.is_liked}
          postId={postInfo.post_id}
          username={postInfo.user.username}
        />
      )}
    </Container>
  );
}

const Container = styled.div``;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
`;

const Title = styled.div`
  font-size: 2.8rem;
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
const CountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  font-size: 0.9rem;
  color: #aaa;
  gap: 0.5rem;
  strong {
    color: ${({ theme }) => theme.color.font};
    margin: 0 0.5rem;
  }
`;
const TagContainer = styled.div`
  padding: 0.5rem;

  span {
    margin-right: 1rem;
    font-weight: bold;
    color: #f15f5f;
    padding: 0.3rem 0.5rem;
    background-color: ${({ theme }) => theme.color.tagBox};
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
    color: ${({ theme }) => theme.color.blockquoteColor};
    padding: 1.5rem;
    background: ${({ theme }) => theme.color.blockquote};
    border-left: 3px solid ${({ theme }) => theme.color.alarm};
  }
`;
