import React from "react";
import styled from "styled-components";
import sampleImg from "../../../Assets/Images/whale.jpg";

export default function Profile({ size = "lg", thumbnailType = "post" }) {
  let scale = 1.5;

  if (size === "lg") scale = 2;

  let multiple = 1;
  if (thumbnailType === "notice") multiple = 2;
  else if (thumbnailType === "confirm") multiple = 0.8;

  const imgSize = scale * multiple;
  return <Container imgSize={imgSize} src={sampleImg} alt="" />;
}

const Container = styled.img`
  width: ${(props) => props.imgSize * 5}rem;
  height: ${(props) => props.imgSize}rem;
`;
