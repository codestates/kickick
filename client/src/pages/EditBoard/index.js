import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  EditQuill,
  TitleInput,
  Common,
  TagInput,
  Select,
} from "../../components";

import {
  getCategory,
  getPostsName,
  getContent,
} from "../../store/actions/postadd";

export default function EditBoard() {
  const [isSelect, setIsSelect] = useState(false);
  const [icon, setIcon] = useState({ label: "학습" });
  const state = useSelector((state) => state.postAdd);
  const dispatch = useDispatch();
  const handleIcon = (label) => {
    setIcon(label);
    setIsSelect(!isSelect);
  };

  const handleClick = () => {
    dispatch(getCategory(icon.label));
    console.log(state);
  };
  return (
    <Container>
      <TitleContainer>
        <Select
          isSelect={isSelect}
          setIsSelect={setIsSelect}
          icon={icon}
          handleIcon={handleIcon}
          category="게시판"
          fontSize="1rem"
        />
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
