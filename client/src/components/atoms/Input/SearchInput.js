import React from "react";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

export default function SearchInput({ handleSearch, handleInput }) {
  return (
    <Container>
      <Search
        type="text"
        placeholder="검색어를 입력하세요."
        onChange={handleInput}
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

  &:focus {
    border-bottom: 1px solid black;
  }
`;
