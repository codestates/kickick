import React, { useState } from "react";
import styled from "styled-components";
import PostAlign from "../../atoms/CheckBox/PostAlign";
import Options from "../../atoms/Select/Options";
import SearchInput from "../../atoms/Input/SearchInput";
import PostTag from "../../atoms/Tag/PostTag";

import { FaAlignJustify } from "react-icons/fa";

export default function TotalSearch() {
  const [isSelect, setIsSelect] = useState(false);
  const [icon, setIcon] = useState({
    icon: <FaAlignJustify />,
    name: "제목",
  });
  const [tag, setTag] = useState([]);
  const [word, setWord] = useState("");

  const handleIcon = ({ icon, name }) => {
    setIcon({ icon, name });
    setIsSelect(!isSelect);
  };

  const handleSearch = () => {
    let dummy = [...tag];
    let isDuplicate = dummy.findIndex((el) => el.name === icon.name);
    if (isDuplicate === -1) {
      dummy.push({ name: icon.name, word });
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
        <AlignContainer>
          <PostAlign />
          <PostAlign alignType={"hot"} />
        </AlignContainer>
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
            tagType={el.name}
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
  margin: 0 1rem 3rem 1rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1rem 1rem 1rem;
`;

const AlignContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: auto;
`;
