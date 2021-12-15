import React from "react";
import styled from "styled-components";

export default function IntroTextarea({ handleTextarea, handleViewIntro }) {
  return <Container onBlur={handleTextarea} onChange={handleViewIntro} />;
}

const Container = styled.textarea`
  height: 6rem;
  padding: 1rem;
  font-size: 0.9rem;
  border: 3px solid #d8d8d8;
  border-radius: 0.5rem;
  resize: none;
  &:focus {
    border: 3px solid skyblue;
  }
`;
