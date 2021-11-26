import React from "react";
import styled from "styled-components";

export default function Profile({
  size = "lg",
  src = "../../../Assets/Images/whale.jpg",
  alt = "",
  profileType = "comment",
}) {
  let scale = 0.5;
  if (size === "sm") scale = 0.4;
  else if (size === "lg") scale = 0.75;

  let multiple = 1;
  if (profileType === "post") multiple = 0.75;
  else if (profileType === "mypage") multiple = 2;

  const imgSize = scale * multiple;
  return (
    <Container imgSize={imgSize}>
      <img src={src} alt={alt} />
    </Container>
  );
}

const Container = styled.div`
  width: ${(props) => props.imgSize}rem;
  height: ${(props) => props.imgSize}rem;

  border-radius: 20px;
`;
