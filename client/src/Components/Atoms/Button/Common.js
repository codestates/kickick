import React from "react";
import styled from "styled-components";

export default function Common({
  size = "lg",
  label = "글쓰기",
  btnType = "register",
  handleClick,
}) {
  let multiple = 1;
  if (btnType === "register") multiple = 1.5;
  else if (btnType === "write") multiple = 1.2;

  let scale = 1 * multiple;
  if (size === "sm") scale = 0.75 * multiple;
  else if (size === "lg") scale = 1.5 * multiple;

  return (
    <Container onClick={handleClick} scale={scale}>
      {label}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${(props) => props.scale * 3}rem;
  height: ${(props) => props.scale * 2}rem;

  background-color: #0c0c42;

  font-size: ${(props) => props.scale * 0.5}rem;
  font-weight: bold;
  color: white;
  line-height: 0.9;
`;
