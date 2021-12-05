import React from "react";
import styled from "styled-components";
import sampleImg from "../../../assets/images/KickBoardPostThumbnail.png";

export default function Profile({ thumbnailType = "post", src }) {
  let multiple = 1;
  if (thumbnailType === "notice") multiple = 2;
  else if (thumbnailType === "confirm") multiple = 1.2;

  const imgSize = multiple;
  return <Container imgSize={imgSize} src={sampleImg} alt="" />;
}

const Container = styled.img`
  min-width: ${(props) => props.imgSize * 10}rem;
`;
