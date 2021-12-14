import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

import {
  EditQuill,
  TitleInput,
  Common,
  IntroTextarea,
  DragDrop,
  Profile,
  Thumbnail,
  TagInput,
} from "../../components";

import {
  getCategoryAction,
  getPostNameAction,
  getContentAction,
  getKickContentAction,
  resetPostAddAction,
} from "../../store/actions/postadd";

import introductionicon from "../../assets/images/icon/introductionicon.png";
import contenticon from "../../assets/images/icon/contenticon.png";
import titileicon from "../../assets/images/icon/titleicon.png";
import thumbnailicon from "../../assets/images/icon/thumbnailicon.png";
import tagicon from "../../assets/images/icon/tagicon.png";

import { createPost, createTag } from "../../apis/posts";
import { createKicks } from "../../apis/kicks";
import { uploadSingleImage } from "../../apis/upload";

export default function EditKickBoard() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { postAdd, login } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [postname, setPostname] = useState();
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [file, setFile] = useState();
  const [tagArr, setTagArr] = useState([]);

  const handleViewPostName = (e) => {
    setPostname(e.target.value);
  };
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
    createPost(postAdd.category, postAdd.post_name, postAdd.content)
      .then((data) => {
        const post_id = data.data.data.post_id;
        if (thumbnail) {
          const formData = new FormData();
          formData.append("img", thumbnail);
          uploadSingleImage(formData, "post").then((data) => {
            const location = data.data.data.location;
            createKicks(post_id, location, postAdd.kick_content).then(() => {
              navigate(`/kickboard/${category}`);
            });
          });
        } else {
          createKicks(post_id, null, postAdd.kick_content).then(() => {
            navigate(`/kickboard/${category}`);
          });
        }

        createTag(post_id, [category]).catch((err) => console.log(err));
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    dispatch(resetPostAddAction());
    dispatch(getCategoryAction(category, "킥"));
  }, [dispatch, category]);

  return (
    <Wrapper>
      <h1>나만의 킥 작성 </h1>
      <Container>
        <WritePage>
          <InfoContainer>
            <HeadlineContainer>
              <img src={titileicon} alt="" />
              <h3>제목</h3>
              <TitleInput
                type="title"
                handlePostName={handlePostName}
                handleChange={handleViewPostName}
              />
            </HeadlineContainer>
          </InfoContainer>
          <InfoContainer>
            <HeadlineContainer>
              <img src={tagicon} alt="" />
              <h3>태그</h3>
              <TagInput
                tagArr={tagArr}
                setTagArr={setTagArr}
                category={category}
              />
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
        <ViewPage>
          <h1>{postname}</h1>
          <ProfileContainer>
            <Profile type="post" src={login.isLogin.profile} />
            <span>{login.isLogin.username}</span>
          </ProfileContainer>
          <TagInput
            tagArr={tagArr}
            setTagArr={setTagArr}
            category={category}
            readOnly={true}
          />
          <Thumbnail src={file} alt="" />
          <ReactQuill
            readOnly={true}
            theme={"bubble"}
            value={content}
            style={{
              backgroundColor: "#eee",
              padding: "1rem 0",
              borderRadius: "0.5rem",
              height: "40rem",
            }}
          />
        </ViewPage>
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
`;
const WritePage = styled.div`
  width: calc(50% - 2rem);

  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  gap: 1rem;
`;

const ViewPage = styled.div`
  width: calc(50% - 2rem);
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  gap: 1rem;
  border-left: 3px dashed #eee;

  > h1 {
    font-size: 3rem;
    height: 4.5rem;
  }

  > img {
    object-fit: scale-down;
    height: 20rem;
    width: 100%;
    margin: 3rem 0 5rem 0;
  }
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

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  img {
    margin-right: 1rem;
  }
`;
