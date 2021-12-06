import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import PostAlign from "../../molecules/CheckBox/PostAlign";
import Select from "../../molecules/Select";
import SearchInput from "../../atoms/Input/SearchInput";
import Tag from "../../atoms/Tag";
import { getPostsList } from "../../../apis/posts";
import { getList } from "../../../store/actions/postadd/boardList";
import { search, delSearch } from "../../../store/actions/postadd";

export default function TotalSearch({ boardCategory, setSelectPage }) {
  const state = useSelector((state) => state.board);
  const stateTag = useSelector((state) => state.tag);
  const dispatch = useDispatch();
  const [isSelect, setIsSelect] = useState(false);
  const [icon, setIcon] = useState({ label: "제목" });
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
    dispatch(search(icon.label, word));
    setWord("");

    if (icon.label === "제목") {
      getPostsList(
        boardCategory,
        word,
        state.writer.word,
        state.tag.word,
        null,
        20
      )
        .then((data) =>
          dispatch(
            getList(
              data.data,
              { type: icon.label, word },
              state.writer,
              state.tag
            )
          )
        )
        .then(() => setSelectPage(1))
        .catch((err) => err.response);
    } else if (icon.label === "글쓴이") {
      getPostsList(
        boardCategory,
        state.title.word,
        word,
        state.tag.word,
        null,
        20
      )
        .then((data) =>
          dispatch(
            getList(
              data.data,
              state.title,
              { type: icon.label, word },
              state.tag
            )
          )
        )
        .then(() => setSelectPage(1))
        .catch((err) => err.response);
    } else if (icon.label === "태그") {
      getPostsList(
        boardCategory,
        state.title.word,
        state.writer.word,
        word,
        null,
        20
      )
        .then((data) =>
          dispatch(
            getList(data.data, state.title, state.writer, {
              type: icon.label,
              word,
            })
          )
        )
        .then(() => setSelectPage(1))
        .catch((err) => err.response);
    }
  };

  const handleInput = (e) => {
    setWord(e.target.value);
  };

  const handleClick = (idx, label) => {
    dispatch(delSearch(idx));

    if (state.title.type === label) {
      getPostsList(
        boardCategory,
        null,
        state.writer.word,
        state.tag.word,
        null,
        20
      )
        .then((data) =>
          dispatch(
            getList(data.data, { type: "", word: "" }, state.writer, state.tag)
          )
        )
        .catch((err) => err.response);
    } else if (state.writer.type === label) {
      getPostsList(
        boardCategory,
        state.title.word,
        null,
        state.tag.word,
        null,
        20
      )
        .then((data) =>
          dispatch(
            getList(data.data, state.title, { type: "", word: "" }, state.tag)
          )
        )
        .catch((err) => err.response);
    } else if (state.tag.type === label) {
      getPostsList(
        boardCategory,
        state.title.word,
        state.writer.word,
        null,
        null,
        20
      )
        .then((data) =>
          dispatch(
            getList(data.data, state.title, state.writer, {
              type: "",
              word: "",
            })
          )
        )
        .catch((err) => err.response);
    }
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
