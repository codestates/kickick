import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Align, Select, SearchInput, Tag } from "../../../components";

import {
  boardAlignAction,
  titleSearchAction,
  writerSearchAction,
  tagSearchAction,
  resetPaginationAction,
} from "../../../store/actions/postsearch";

import { addTagAction, delTagAction } from "../../../store/actions/postadd";

export default function TotalSearch() {
  const stateTag = useSelector((state) => state.tag);
  const dispatch = useDispatch();

  const [isSelect, setIsSelect] = useState(false);
  const [icon, setIcon] = useState({ label: "제목" });
  const [word, setWord] = useState("");

  const handleAlign = (event) => {
    const label = event.target.innerText;
    dispatch(boardAlignAction(label));
    dispatch(resetPaginationAction());
  };
  const handleIcon = (label) => {
    setIcon(label);
    setIsSelect(!isSelect);
  };
  const handleSearch = () => {
    dispatch(addTagAction(icon.label, word));
    setWord("");

    if (icon.label === "제목") {
      dispatch(titleSearchAction(word));
    } else if (icon.label === "글쓴이") {
      dispatch(writerSearchAction(word));
    } else if (icon.label === "태그") {
      dispatch(tagSearchAction(word));
    }
  };

  const handleInput = (e) => {
    setWord(e.target.value);
  };
  const handleClick = (idx, label) => {
    dispatch(delTagAction(idx));

    if ("제목" === label) {
      dispatch(titleSearchAction());
    } else if ("글쓴이" === label) {
      dispatch(writerSearchAction());
    } else if ("태그" === label) {
      dispatch(tagSearchAction());
    }
  };

  return (
    <>
      <Container>
        <Align handleAlign={handleAlign} />
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
        {stateTag.map((el, idx) => (
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
    width: 200%;
    height: 8rem;
    margin: 1rem 0;
    justify-content: center;
    align-items: center;
    background-color: #eeeeee;
    border-radius: 20px;
    > div:nth-of-type(2) {
      width: 40%;
      input {
        font-size: 0.8rem;
      }
    }
  }
`;
