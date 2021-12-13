import React from "react";
import styled, { css } from "styled-components";

import default_thumbnail from "../../../assets/images/default/default_thumbnail.jpg";

export default function Thumbnail({ type = "post", src }) {
  return <Container type={type} src={src ? src : default_thumbnail} alt="" />;
}

const Container = styled.img`
  ${({ type }) =>
    type === "post" &&
    css`
      object-fit: cover;
      object-position: center top;
      height: 13.5rem;
      opacity: 0.8;
    `}
`;
