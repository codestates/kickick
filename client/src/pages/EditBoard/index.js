import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  EditQuill,
  TitleInput,
  Common,
  TagInput,
  IconText,
} from "../../components";

import {
  getCategory,
  getPostsName,
  getContent,
} from "../../store/actions/postadd";

export default function EditBoard() {
  const state = useSelector((state) => state.postAdd);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getCategory("학습"));
    console.log(state);
  };
  return (
    <Container>
      <TitleContainer>
        <IconText label="학습" />
        <TitleInput padding="0.3rem" />
      </TitleContainer>
      <EditQuill image={false} />
      <TagInput />
      <BtnContainer>
        <Common label="등 록" btnType="bigger" handleClick={handleClick} />
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
