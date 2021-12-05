import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  EditQuill,
  TitleInput,
  Common,
  TagInput,
  IconText,
} from "../../components";

import {
  getCategory,
  getPostName,
  getContent,
  reset,
} from "../../store/actions/postadd";
import { createPost, createTag } from "../../apis/posts";

export default function EditBoard({ boardCategory }) {
  const navigate = useNavigate();
  const state = useSelector((state) => state.postAdd);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [tagArr, setTagArr] = useState([]);

  const handleBlur = (e) => {
    dispatch(getPostName(e.target.value));
  };

  const handleQuill = () => {
    dispatch(getContent(content));
  };

  const handleClick = () => {
    createPost(state.category, state.post_name, state.content)
      .then((data) => {
        createTag(data.data.data.post_id, boardCategory)
          .then((data) => navigate("/board"))
          .catch((err) => console.log(err.response));
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    dispatch(reset());
    dispatch(getCategory(boardCategory));
  }, []);
  return (
    <Container>
      <TitleContainer>
        <IconText label={boardCategory} />
        <TitleInput padding="0.3rem" handleBlur={handleBlur} />
      </TitleContainer>
      <EditQuill
        image={false}
        content={content}
        setContent={setContent}
        handleQuill={handleQuill}
      />
      <TagInput tagArr={tagArr} setTagArr={setTagArr} />
      <BtnContainer>
        <Common label="등 록" type="bigger" handleClick={handleClick} />
      </BtnContainer>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 88rem;
  margin: 0 auto;
  gap: 1rem;
`;
const TitleContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;
const BtnContainer = styled.div`
  text-align: center;
`;
