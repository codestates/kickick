import React from "react";
import styled from "styled-components";

export default function Tab({ label = "회원정보", handleClick }) {
  return <Container onClick={handleClick}>{label}</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 4rem;

  font-size: 1rem;

  & + & {
    border-top: 1px solid #dddddd;
  }
`;
