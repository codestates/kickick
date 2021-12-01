import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Tab({ label, handleClick, to }) {
  return (
    <Container to={to} onClick={handleClick}>
      {label}
    </Container>
  );
}

const Container = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3rem;
  background-color: white;
  font-size: 0.9rem;

  &:hover {
    background-color: #eeeeee;
  }

  & + & {
    border-top: 1px solid #dddddd;
  }
`;
