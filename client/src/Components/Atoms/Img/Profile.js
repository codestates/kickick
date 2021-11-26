import React from "react";
import styled from "styled-components";
import sampleImg from "../../../Assets/Images/whale.jpg";

export default function Profile({ size = "lg", profileType = "comment" }) {
  let scale = 2;
  if (size === "sm") scale = 1;
  else if (size === "lg") scale = 3;

  let multiple = 1;
  if (profileType === "post") multiple = 0.75;
  else if (profileType === "mypage") multiple = 2;

  const imgSize = scale * multiple;
  return <Container imgSize={imgSize} src={sampleImg} alt="" />;
}

const Container = styled.img`
  width: ${(props) => props.imgSize}rem;
  height: ${(props) => props.imgSize}rem;

  border-radius: 50%;
`;
