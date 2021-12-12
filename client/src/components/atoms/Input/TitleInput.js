import React from "react";
import styled, { css } from "styled-components";
export default function TitleInput({
  holder = "제목을 입력하세요",
  handleKeyon,
  handleChange,
  handlePostName,
  val,
  title,
  type,
}) {
  return (
    <Title
      maxLength="30"
      type="text"
      placeholder={holder}
      onBlur={handlePostName}
      onKeyDown={handleKeyon}
      onChange={handleChange}
      value={val}
      defaultValue={title ? title : null}
      type={type}
    />
  );
}
const Title = styled.input`
  width: 30rem;
  font-size: 1.2rem;
  border-bottom: 3px solid transparent;
  &:focus {
    border-bottom: 3px solid skyblue;
  }

  ${({ type }) =>
    type === "title" &&
    css`
      width: 24rem;
      font-size: 2.8rem;
      font-weight: bold;
    `}

  ${({ type }) =>
    type === "tag" &&
    css`
      width: 10rem;
    `}
`;
