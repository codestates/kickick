import React from "react";
import styled from "styled-components";

import sampleImg from "../../../assets/images/KickBoardPostThumbnail.png";

const thumbnailList = [
  { type: "post", size: 20 },
  { type: "notice", size: 12 },
  { type: "confirm", size: 26 },
];

export default function Profile({ type = "post", src }) {
  const { size } = thumbnailList.find((el) => el.type === type);

  return <Container size={size} src={sampleImg} alt="" />;
}

const Container = styled.img`
  min-width: ${({ size }) => size}rem;
`;
