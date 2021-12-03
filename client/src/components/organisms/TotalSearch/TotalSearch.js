import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import PostAlign from "../../molecules/CheckBox/PostAlign";
import Select from "../../molecules/Select";
import SearchInput from "../../atoms/Input/SearchInput";
import Tag from "../../atoms/Tag";
import { getPostsList } from "../../../apis/posts";
import { getList } from "../../../store/actions/postadd/boardList";

export default function TotalSearch() {
  const state = useSelector((state) => state.board);
  const dispatch = useDispatch();
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

    if (icon.label === "제목") {
      getPostsList("학습", word, null, 20)
        .then((data) => dispatch(getList(data.data, icon.label, word)))
        .catch((err) => err.response);
    } else if (icon.label === "글쓴이") {
    } else if (icon.label === "태그") {
      console.log(word);
    }
  };

  const handleInput = (e) => {
    setWord(e.target.value);
  };

  const handleClick = (idx, label) => {
    let dummy = [...tag];
    dummy.splice(idx, 1);
    setTag(dummy);
    // if (state.lable === label) {
    //   getPostsList("학습", null, null, 20)
    //   .then(data => dispatch(getList(data.data, )));
    // }
  };

  return (
    <>
      <Container>
        <PostAlign highlight={highlight} handleAlign={handleAlign} />
        <SearchContainer>
          <Select
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
          <Tag
            key={el.label}
            label={el.label}
            detail={el.word}
            handleClick={() => handleClick(idx, el.label)}
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
