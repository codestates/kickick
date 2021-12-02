import React from "react";
import styled from "styled-components";

export default function TitleInput({
  holder = "제목을 입력하세요",
  width = "30rem",
  padding = "none",
  handleKeyon,
  handleChange,
  val,
}) {
  return (
    <Title
      type="text"
      placeholder={holder}
      width={width}
      onKeyUp={handleKeyon}
      onChange={handleChange}
      value={val}
      padding={padding}
    />
  );
}

const Title = styled.input`
  padding: ${({ padding }) => padding};
  border: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  outline: none;
  width: ${({ width }) => width};
  height: 100%;
  font-size: 1rem;

  &:focus {
    border-bottom: 3px solid rgba(0, 0, 0, 0.6);
  }
`;