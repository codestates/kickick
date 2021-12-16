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
import { createNotices } from "../../apis/notices";
import { uploadSingleImage } from "../../apis/upload";
import {
  getCategoryAction,
  getPostNameAction,
  getContentAction,
  getKickContentAction,
  resetPostAddAction,
} from "../../store/actions/postadd";

import {
  noticeSocketAction,
  eventSocketAction,
} from "../../store/actions/socket";

import introductionicon from "../../assets/images/icon/introductionicon.png";
import contenticon from "../../assets/images/icon/contenticon.png";
import titileicon from "../../assets/images/icon/titleicon.png";
import thumbnailicon from "../../assets/images/icon/thumbnailicon.png";

export default function EditNotice() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { postAdd } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [file, setFile] = useState();

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
    if (thumbnail) {
      const formData = new FormData();
      formData.append("img", thumbnail);
      uploadSingleImage(formData, "post").then((data) => {
        const location = data.data.data.location;
        createNotices({
          type: category === "이벤트" ? "events" : "notices",
          notice_name: postAdd.post_name,
          summary: postAdd.content,
          thumbnail: location,
          content: postAdd.kick_content,
        })
          .then(() =>
            dispatch(
              category === "이벤트"
                ? eventSocketAction(true)
                : noticeSocketAction(true)
            )
          )
          .then(() =>
            dispatch(
              category === "이벤트"
                ? eventSocketAction(false)
                : noticeSocketAction(false)
            )
          )
          .then(() => navigate(`/notice/${category}`))
          .catch((err) => console.log(err));
      });
    }
  };

  useEffect(() => {
    dispatch(resetPostAddAction());
    dispatch(getCategoryAction(category));
  }, [dispatch, category]);

  return (
    <Wrapper>
      <h1>공지 작성 </h1>
      <Container>
        <WritePage>
          <InfoContainer>
            <HeadlineContainer>
              <img src={titileicon} alt="" />
              <h3>제목</h3>
              <TitleInput type="title" handlePostName={handlePostName} />
            </HeadlineContainer>
          </InfoContainer>
          <InfoContainer>
            <HeadlineContainer>
              <img src={thumbnailicon} alt="" />
              <h3>썸네일</h3>
            </HeadlineContainer>
            <DragDrop
              file={file}
              setFile={setFile}
              setThumbnail={setThumbnail}
            />
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
          <InfoContainer>
            <HeadlineContainer>
              <img src={introductionicon} alt="" />
              <h3>소개</h3>
            </HeadlineContainer>
            <IntroTextarea handleTextarea={handleIntro} />
          </InfoContainer>
          <BtnContainer>
            <Common label="등 록" type="bigger" handleClick={handleClick} />
          </BtnContainer>
        </WritePage>
      </Container>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  padding: 3rem 1rem;

  > h1 {
    font-size: 3rem;
    color: skyblue;
    margin: 2rem 0 2rem 4rem;
  }
`;
const Container = styled.div`
  display: flex;
  width: 64rem;
`;
const WritePage = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  gap: 1rem;
  width: 64rem;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  gap: 1rem;

  h3 {
    font-size: 1.5rem;
    color: gray;
    margin-right: 1rem;
  }
`;

const HeadlineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  img {
    width: 3rem;
    height: 3rem;
  }
`;
const BtnContainer = styled.div`
  margin-top: 2rem;
  text-align: center;
`;
