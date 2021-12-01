import React, { useState } from "react";
import styled from "styled-components";

import PostAlign from "../../molecules/CheckBox/PostAlign";
import Options from "../../atoms/Select/Options";
import SearchInput from "../../atoms/Input/SearchInput";
import PostTag from "../../atoms/Tag/PostTag";

export default function TotalSearch() {
  const [isSelect, setIsSelect] = useState(false);
  const [icon, setIcon] = useState({ label: "제목" });
  const [tag, setTag] = useState([]);
  const [word, setWord] = useState("");
  const [highlight, setHighlight] = useState("최신");

  const handleAlign = (event) => {
    const label = event.target.innerText;
    setHighlight(label);
  };

  const handleIcon = (label) => {
    setIcon(label);
    setIsSelect(!isSelect);
  };

  const handleSearch = () => {
    let dummy = [...tag];
    let isDuplicate = dummy.findIndex((el) => el.label === icon.label);
    if (isDuplicate === -1) {
      dummy.push({ label: icon.label, word });
    } else {
      dummy[isDuplicate].word = word;
    }
    setTag(dummy);
    setWord("");
  };

  const handleInput = (e) => {
    setWord(e.target.value);
  };

  const handleClick = (idx) => {
    let dummy = [...tag];
    dummy.splice(idx, 1);
    setTag(dummy);
  };
  return (
    <>
      <Container>
        <PostAlign highlight={highlight} handleAlign={handleAlign} />
        <SearchContainer>
          <Options
            icon={icon}
            handleIcon={handleIcon}
            isSelect={isSelect}
            setIsSelect={setIsSelect}
          />
          <SearchInput
            handleSearch={handleSearch}
            handleInput={handleInput}
            word={word}
          />
        </SearchContainer>
      </Container>
      <TagContainer>
        {tag.map((el, idx) => (
          <PostTag
            type={el.label}
            detail={el.word}
            handleClick={() => handleClick(idx)}
          />
        ))}
      </TagContainer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1rem 1rem 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 2.5rem;
  margin: 0 1rem 1rem 1rem;
  gap: 1rem;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-left: auto;

  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    height: 8rem;
    margin: 1rem 0;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    border-radius: 10px;

    > div:nth-of-type(2) {
      width: 40%;
      input {
        font-size: 0.8rem;
      }
    }
  }
`;
