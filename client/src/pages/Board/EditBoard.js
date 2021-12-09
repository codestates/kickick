import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EditQuill, TitleInput, Common, TagInput } from "../../components";

import {
  getCategoryAction,
  getPostNameAction,
  getContentAction,
  reset,
} from "../../store/actions/postadd";
import { createPost, createTag } from "../../apis/posts";

export default function EditBoard() {
  const { category } = useParams();
  const navigate = useNavigate();
  const state = useSelector((state) => state.postAdd);
  const dispatch = useDispatch();
  const [content, setContent] = useState("");
  const [tagArr, setTagArr] = useState([]);

  const handlePostName = (e) => {
    dispatch(getPostNameAction(e.target.value));
  };

  const handleContent = () => {
    dispatch(getContentAction(content));
  };

  const handleClick = () => {
    createPost(state.category, state.post_name, state.content)
      .then((data) => {
        createTag(data.data.data.post_id, [category, ...tagArr])
          .then(() => navigate(`/board/${category}`))
          .catch((err) => console.log(err.response));
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    dispatch(reset());
    dispatch(getCategoryAction(category));
  }, [category, dispatch]);

  return (
    <Container>
      <TitleContainer>
        <TitleInput handlePostName={handlePostName} />
      </TitleContainer>
      <EditQuill
        image={false}
        content={content}
        setContent={setContent}
        handleContent={handleContent}
      />
      <TagInput tagArr={tagArr} setTagArr={setTagArr} category={category} />
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
const TitleContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;
const BtnContainer = styled.div`
  text-align: center;
`;
