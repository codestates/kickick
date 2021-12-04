import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import { IconBox } from "../../";
import { useSelector, useDispatch } from "react-redux";
import { getPostsInfo } from "../../../apis/posts";
import { getPostInfo } from "../../../store/actions/postadd";

export default function DetailBoardTop() {
  const state = useSelector((state) => state.postInfo);
  const dispatch = useDispatch();
  const { post_id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPostsInfo(post_id)
      .then((data) => {
        dispatch(getPostInfo(data.data));
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err.response));
  }, []);

  if (loading) return "";
  return (
    <Container>
      <TopContainer>
        <Title>{state.data.post_name}</Title>
        <UserAndCountContainer>
          <UserContainer>
            <IconBox label="user" />
            {state.data.user.username}
          </UserContainer>
          <UserContainer>
            <IconBox label="count" />
            {state.data.view_count}
          </UserContainer>
        </UserAndCountContainer>
        <TagContainer>
          <span>태그</span>
          <span>#어디야?</span>
          <span>#뭐해?</span>
          <span>#자니?</span>
        </TagContainer>
      </TopContainer>
      <Content>
        <ReactQuill
          value={state.data.content}
          readOnly={true}
          theme={"bubble"}
        />
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 60vw;
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
