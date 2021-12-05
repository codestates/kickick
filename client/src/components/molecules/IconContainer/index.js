import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { IconBox } from "../../";

export default function IconContainer() {
  const navigate = useNavigate();
  const handleClick = (label) => {
    if (label === "arrow") {
      console.log("hi");
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
