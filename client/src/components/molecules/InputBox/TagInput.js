import React, { useState } from "react";
import styled from "styled-components";
import { TitleInput } from "../../";
import { FaHashtag } from "react-icons/fa";

export default function TagInput({ tagArr, setTagArr, category }) {
  const [value, setValue] = useState("");

  const handleKeyon = (e) => {
    if (e.code === "Backspace" && value.length === 0 && tagArr.length) {
      let newTag = tagArr.slice(0, -1);
      setTagArr(newTag);
    }
    if ((e.code === "Enter" && value) || (e.code === "NumpadEnter" && value)) {
      let dummy = [...tagArr];
      if (value === category) return;
      if (dummy.length === 2) return;
      if (dummy.find((el) => el === value)) return;
      dummy.push(value);
      setTagArr(dummy);
      setValue("");
    }
  };
  const handleChange = (e) => {
    if (e.target.value.length <= 10) {
      setValue(e.target.value);
    } else return;
  };

  const handleDel = (idx) => {
    let dummy = [...tagArr];
    dummy.splice(idx, 1);
    setTagArr(dummy);
  };
  return (
    <Container>
      {tagArr.map((inputValue, idx) => {
        return (
          <TagContainer key={idx} onClick={() => handleDel(idx)}>
            <FaHashtag />
            <span>{inputValue}</span>
          </TagContainer>
        );
      })}
      <TitleInput
        holder="태그를 입력하세요."
        handleKeyon={handleKeyon}
        handleChange={handleChange}
        val={value}
        type="tag"
      />
      <Alarm tag={tagArr}>태그는 2개까지 입력 가능합니다.</Alarm>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 1rem;
`;
const TagContainer = styled.div`
  padding: 0.37rem;
  font-weight: bold;
  color: #66a14b;
  background-color: #ececec;
  border-radius: 10px;

  cursor: pointer;

  svg {
    height: 0.8rem;
  }
`;

const Alarm = styled.span`
  padding: 0.5rem;
  font-weight: bold;
  color: #e02401;
  opacity: ${({ tag }) => (tag.length === 2 ? 1 : 0)};
  transition: all 0.3s linear;
`;
