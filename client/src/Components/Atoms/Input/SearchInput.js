import React from "react";
import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

export default function SearchInput() {
  return (
    <Container>
      <Search type="text" placeholder="검색어를 입력하세요." />
      <FaSearch style={{ cursor: "pointer" }} />
    </Container>
  );
}

const Container = styled.div``;

const Search = styled.input`
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-bottom: 1px solid black;
  }
`;
