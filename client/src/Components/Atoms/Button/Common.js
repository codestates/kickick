import React from "react";
import styled from "styled-components";

export default function Common({
  size = "lg",
  label = "등록",
  btnType = "register",
  handleClick,
}) {
  let multiple = 1;
  if (btnType === "register") multiple = 2;
  else if (btnType === "write") multiple = 1.5;

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

  width: ${(props) => props.scale * 5}rem;
  height: ${(props) => props.scale * 2}rem;

  font-size: ${(props) => props.scale}rem;
  font-weight: bold;
  line-height: 0.9;
`;
