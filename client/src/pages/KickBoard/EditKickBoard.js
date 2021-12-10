import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  EditQuill,
  TitleInput,
  Common,
  IntroTextarea,
  DragDrop,
} from "../../components";

import {
  getCategoryAction,
  getPostNameAction,
  getContentAction,
  getThumbnailAction,
  getKickContentAction,
  reset,
} from "../../store/actions/postadd";

import introductionicon from "../../assets/images/introductionicon.png";
import contenticon from "../../assets/images/contenticon.png";
import titileicon from "../../assets/images/titleicon.png";
import thumbnailicon from "../../assets/images/thumbnailicon.png";

import { createPost } from "../../apis/posts";
import { createKicks } from "../../apis/kicks";
import { uploadSingleImage } from "../../apis/upload";

export default function EditKickBoard() {
  const { category } = useParams();
  const navigate = useNavigate();
  const state = useSelector((state) => state.postAdd);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  console.log(state);
  const handlePostName = (e) => {
    dispatch(getPostNameAction(e.target.value));
  };

  const handleIntro = (e) => {
    dispatch(getContentAction(e.target.value));
  };

  const handleThumbnail = (thumbnail) => {
    console.log("d");
    dispatch(getThumbnailAction(thumbnail));
  };

  const handleContent = () => {
    dispatch(getKickContentAction(content));
  };

  const handleClick = () => {
    createPost(state.category, state.post_name, state.content)
      .then(({ data: { post_id } }) => {
        const formData = new FormData();
        formData.append("img", state.thumbnail);
        uploadSingleImage(state.thumbnail, "post").then(
          ({ data: { location, version_id } }) => {
            createKicks(post_id, location, state.kick_content);
            navigate(`/kickboard/${category}`);
          }
        );
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    dispatch(reset());
    dispatch(getCategoryAction(category, "킥"));
  }, [dispatch, category]);

  return (
    <Container>
      <h1>나만의 킥 작성 </h1>
      <InfoContainer>
        <HeadlineContainer>
          <img src={titileicon} alt="" />
          <h3>제목</h3>
        </HeadlineContainer>
        <TitleInput handlePostName={handlePostName} />
      </InfoContainer>
      <InfoContainer>
        <HeadlineContainer>
          <img src={thumbnailicon} alt="" />
          <h3>썸네일</h3>
        </HeadlineContainer>
        <DragDrop handleThumbnail={handleThumbnail} />
      </InfoContainer>
      <InfoContainer>
        <HeadlineContainer>
          <img src={introductionicon} alt="" />
          <h3>소개</h3>
        </HeadlineContainer>
        <IntroTextarea handleTextarea={handleIntro} />
      </InfoContainer>
      <InfoContainer>
        <HeadlineContainer>
          <img src={contenticon} alt="" />
          <h3>본문</h3>
        </HeadlineContainer>
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
  width: 48rem;
  margin: 8rem auto;
  gap: 1rem;

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: skyblue;
  }
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  h3 {
    font-size: 1.5rem;
    color: gray;
  }
`;

const HeadlineContainer = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 3rem;
    height: 3rem;
    margin-right: 0.5rem;
  }
`;
const BtnContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;
