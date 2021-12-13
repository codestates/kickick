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
  TagInput,
  IconBox,
} from "../../components";

import {
  getCategoryAction,
  resetPostAddAction,
} from "../../store/actions/postadd";
import { createPost, createTag } from "../../apis/posts";

export default function EditBoard() {
  const { category } = useParams();
  const navigate = useNavigate();
  const state = useSelector((state) => state.postAdd);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [tagArr, setTagArr] = useState([]);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleMovePage = () => {
    navigate(`/board/${category}`);
  };

  const handleClick = () => {
    createPost(state.category, title, content)
      .then((data) => {
        createTag(data.data.data.post_id, [category, ...tagArr])
          .then(() => navigate(`/board/${category}`))
          .catch((err) => console.log(err.response));
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    dispatch(resetPostAddAction());
    dispatch(getCategoryAction(category));
  }, [category, dispatch]);

  return (
    <Container>
      <QullContainer>
        <DividBox>
          <TitleContainer>
            <TitleInput handleChange={handleChange} type="title" />
            <TagInput
              tagArr={tagArr}
              setTagArr={setTagArr}
              category={category}
            />
          </TitleContainer>
          <EditQuill image={false} content={content} setContent={setContent} />

          <BtnContainer>
            <IconBox label="arrow" handleClick={handleMovePage} />
            <Common label="등 록" type="bigger" handleClick={handleClick} />
          </BtnContainer>
        </DividBox>

        <DividBox>
          <TitleContainer style={{ marginBottom: "2rem" }}>
            <TitleBox>{title}</TitleBox>
          </TitleContainer>
          <ReactQuill
            value={content}
            readOnly={true}
            theme={"bubble"}
            style={{ widht: "43rem", paddingTop: "0.5rem" }}
          />
        </DividBox>
      </QullContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 90rem;
  margin: 0 auto;
  gap: 1rem;
`;
const TitleContainer = styled.div`
  margin-top: 2rem;
`;
const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const QullContainer = styled.div`
  display: flex;
  gap: 2rem;
  > :nth-child(2) {
    border-left: 0.2rem solid #c8c8c8;
    padding-left: 3rem;
  }
`;

const DividBox = styled.div``;

const TitleBox = styled.div`
  width: 43rem;
  height: 2.8rem;
  padding-top: 0.5rem;
  font-size: 2.8rem;
  font-weight: bold;
`;
