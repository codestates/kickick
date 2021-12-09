import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditQuill, TitleInput, Common, IntroTextarea } from "../../components";

import {
  getCategoryAction,
  getPostNameAction,
  getContentAction,
  getKickContentAction,
  reset,
} from "../../store/actions/postadd";

import { createPost } from "../../apis/posts";

export default function EditKickBoard() {
  const { category } = useParams();
  const navigate = useNavigate();
  const state = useSelector((state) => state.postAdd);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");

  const handlePostName = (e) => {
    dispatch(getPostNameAction(e.target.value));
  };

  const handleIntro = (e) => {
    dispatch(getContentAction(e.target.value));
  };

  const handleContent = () => {
    dispatch(getKickContentAction(content));
  };

  const handleClick = () => {
    createPost(state.category, state.post_name, state.content)
      .then((data) => {
        navigate(`/kickboard/${category}`);
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    dispatch(reset());
    dispatch(getCategoryAction(category, "킥"));
  }, [dispatch, category]);

  return (
    <Container>
      <InfoContainer>
        <h3>제목</h3>
        <TitleInput handlePostName={handlePostName} />
      </InfoContainer>
      <InfoContainer>
        <h3>소개</h3>
        <IntroTextarea handleTextarea={handleIntro} />
      </InfoContainer>
      <InfoContainer>
        <h3>본문</h3>
        <EditQuill
          content={content}
          setContent={setContent}
          handleContent={handleContent}
        />
      </InfoContainer>
      <BtnContainer>
        <Common label="등 록" type="bigger" handleClick={handleClick} />
      </BtnContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 64rem;
  margin: 0 auto;
  gap: 1rem;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 2rem;

  h3 {
    font-size: 1.5rem;
    color: gray;
  }
`;
const BtnContainer = styled.div`
  text-align: center;
`;
