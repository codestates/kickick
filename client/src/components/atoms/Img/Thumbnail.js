import React from "react";
import styled from "styled-components";

import default_thumbnail from "../../../assets/images/default_thumbnail.jpg";

const thumbnailList = [
  { type: "post", size: 20 },
  { type: "notice", size: 12 },
  { type: "confirm", size: 12 },
];

export default function Profile({ type = "post", src }) {
  const { size } = thumbnailList.find((el) => el.type === type);
  return <Container size={size} src={!src && default_thumbnail} alt="" />;
}

const Container = styled.img`
  min-width: ${({ size }) => size}rem;
`;
