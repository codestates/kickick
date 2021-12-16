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

import { createPost, createTag } from "../../apis/posts";
import { createKicks } from "../../apis/kicks";
import { uploadSingleImage } from "../../apis/upload";

export default function EditKickBoard() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { postAdd, login } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [postname, setPostname] = useState();
  const [intro, setIntro] = useState();
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [file, setFile] = useState();
  const [tagArr, setTagArr] = useState([]);

  const handleViewPostName = (e) => {
    setPostname(e.target.value);
  };
  const handleViewIntro = (e) => {
    setIntro(e.target.value);
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

        createTag(post_id, [category, ...tagArr]).catch((err) =>
          console.log(err)
        );
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    dispatch(resetPostAddAction());
    dispatch(getCategoryAction(category, "킥"));
  }, [dispatch, category]);

  return (
    <Container>
      <WritePage>
        <TitleInput
          type="title"
          handlePostName={handlePostName}
          handleChange={handleViewPostName}
        />
        <TagInput tagArr={tagArr} setTagArr={setTagArr} category={category} />
        <InfoContainer>
          <h3>썸네일</h3>

          <DragDrop file={file} setFile={setFile} setThumbnail={setThumbnail} />
        </InfoContainer>
        <InfoContainer>
          <h3>킥에 대한 한마디</h3>

          <IntroTextarea
            handleTextarea={handleIntro}
            handleViewIntro={handleViewIntro}
          />
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
          <Common label="등록" type="bigger" handleClick={handleClick} />
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
        <blockquote>{intro}</blockquote>
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
  );
}

const Container = styled.div`
  display: flex;
  padding: 3rem 1rem;
`;
const WritePage = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  gap: 0.5rem;

  @media ${({ theme }) => theme.device.notebookS} {
    width: 100%;
  }
`;

const ViewPage = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  gap: 0.5rem;
  border-left: 3px dashed #eee;

  > h1 {
    font-size: 2.8rem;
    height: 4.5rem;
    padding: 0.5rem;
  }

  > img {
    object-fit: scale-down;
    height: 20rem;
    width: 100%;
  }
  > blockquote {
    font-size: 1.2rem;
    font-style: italic;
    color: gray;
    padding: 1.5rem;
    background: #fafafa;
    border-left: 3px solid #0c0c42;
    margin: 1rem 0;
    min-height: 5rem;
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.device.notebookS} {
    display: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 0.5rem;

  h3 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.color.font};
    margin-right: 1rem;
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
