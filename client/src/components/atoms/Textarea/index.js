import React from "react";
import styled from "styled-components";

export default function Textarea({ size = "lg", handleClick, ...props }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  return (
    <Container
      scale={scale}
      placeholder={"로그인 후 사용가능합니다"}
      {...props}
    />
  );
}

const Container = styled.textarea`
  width: ${(props) => props.scale * 27}rem;
  min-height: ${(props) => props.scale * 3}rem;
  padding: ${(props) => props.scale * 0.25}rem;
  border-radius: 5px;
  border: 2px solid #eeeeee;
  font-size: ${(props) => props.scale * 0.5}rem;

  &:focus {
    outline: none;
    border: 2px solid skyblue;
  }
`;
