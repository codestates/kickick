import React from "react";
import styled from "styled-components";
export default function TitleInput({
  holder = "제목을 입력하세요",
  handleKeyon,
  handleChange,
  handlePostName,
  val,
  title,
}) {
  return (
    <Title
      type="text"
      placeholder={holder}
      onBlur={handlePostName}
      onKeyPress={handleKeyon}
      onChange={handleChange}
      value={val}
      defaultValue={title ? title : null}
    />
  );
}
const Title = styled.input`
  border: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  width: 30rem;
  height: 3rem;
  font-size: 1.2rem;
  &:focus {
    border-bottom: 3px solid skyblue;
  }
`;
