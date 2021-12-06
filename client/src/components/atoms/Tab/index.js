import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";

import IconText from "../IconText";

export default function Tab({ label, to }) {
  return (
    <Container to={to}>
      <IconText label={label} />
      <FaAngleRight />
    </Container>
  );
}

const Container = styled(Link)`
  display: flex;

  align-items: center;
  width: calc(50% - 0.5rem);
  height: 3rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
  font-size: 1rem;
  font-family: Roboto, "Noto Sans KR", sans-serif;

  &:hover {
    background-color: #eeeeee;
    > div {
      font-weight: bold;
    }
    svg {
      color: black;
    }
  }

  > svg {
    margin-left: auto;
    margin-right: 1rem;
    color: #cccccc;
  }
`;
