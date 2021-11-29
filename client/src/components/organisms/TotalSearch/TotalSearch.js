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
          <PostAlign size={"md"} />
          <PostAlign alignType={"hot"} size={"md"} />
        </AlignContainer>
        <AlignContainer>
          <Options
            icon={icon}
            handleIcon={handleIcon}
            isSelect={isSelect}
            setIsSelect={setIsSelect}
          />
          <SearchInput handleSearch={handleSearch} handleInput={handleInput} />
        </AlignContainer>
      </Container>
      <Container style={{ display: "block" }}>
        {tag.map((el, idx) => (
          <PostTag
            tagType={el.name}
            detail={el.word}
            handleClick={() => handleClick(idx)}
          />
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  /* border: 1px solid black; */
`;

const AlignContainer = styled.div`
  display: flex;
  height: 2rem;
  gap: 1rem;
`;
