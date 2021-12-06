import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { goBack } from "../../../store/actions/postadd";
import { IconBox } from "../../";

export default function IconContainer() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (label) => {
    if (label === "arrow") {
      dispatch(goBack(true));
      navigate("/board");
    }
  };
  return (
    <Container>
      <IconBox label="arrow" handleClick={handleClick} />
      <IconBox label="heart" />
      <IconBox label="edit" />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
