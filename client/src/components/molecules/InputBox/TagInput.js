import React, { useState } from "react";
import styled from "styled-components";
import { TitleInput } from "../../";
import { FaHashtag } from "react-icons/fa";

export default function TagInput({ tagArr, setTagArr, category }) {
  const [value, setValue] = useState("");

  const handleKeyon = (e) => {
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
    setValue(e.target.value);
  };

  const handleDel = (idx) => {
    let dummy = [...tagArr];
    dummy.splice(idx, 1);
    setTagArr(dummy);
  };
  return (
    <Container>
      <TitleInput
        holder="태그를 입력하세요."
        width="10rem"
        padding="0.3rem"
        handleKeyon={handleKeyon}
        handleChange={handleChange}
        val={value}
      />
      {tagArr.map((inputValue, idx) => {
        return (
          <TagContainer key={idx} onClick={() => handleDel(idx)}>
            <FaHashtag />
            <span>{inputValue}</span>
          </TagContainer>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 0.5rem;
  gap: 1rem;
`;
const TagContainer = styled.div`
  padding: 0.5rem;
  font-weight: bold;
  color: #f15f5f;
  border: 2px solid #f15f5f;
  border-radius: 10px;

  cursor: pointer;
  svg {
    height: 0.8rem;
    color: #f15f5f;
  }
`;
