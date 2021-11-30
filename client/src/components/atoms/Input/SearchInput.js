import React from "react";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

export default function SearchInput({ handleSearch, handleInput, word }) {
  return (
    <Container>
      <Search
        type="text"
        placeholder="검색어를 입력하세요."
        value={word}
        onChange={handleInput}
        onKeyUp={(e) => {
          if (e.code === "Enter") handleSearch(e);
        }}
      />
      <FaSearch style={{ cursor: "pointer" }} onClick={handleSearch} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Search = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;
  width: 20rem;
  height: 100%;
  font-size: 1rem;

  &:focus {
    border-bottom: 1px solid black;
  }
`;
