import React from "./node_modules/react";
import styled from "./node_modules/styled-components";

export default function Common({
  size = "lg",
  label = "글쓰기",
  btnType = "register",
  handleClick,
  backgroundColor = "#0c0c42",
  color = "#ffffff",
}) {
  let multiple = 1;
  if (btnType === "register") multiple = 1.5;
  else if (btnType === "write") multiple = 0.5;

  let scale = 1 * multiple;
  if (size === "sm") scale = 0.75 * multiple;
  else if (size === "lg") scale = 1.5 * multiple;

  return (
    <Container
      onClick={handleClick}
      scale={scale}
      backgroundColor={backgroundColor}
      color={color}
    >
      {label}
    </Container>
  );
}

const Container = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  height: ${(props) => props.scale * 1}rem;
  padding: ${(props) => props.scale * 0.1}rem ${(props) => props.scale * 0.3}rem;
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor};

  font-size: ${(props) => props.scale * 0.4}rem;
  font-weight: bold;
  color: ${(props) => props.color};
  line-height: 0.9;
  cursor: pointer;
`;
