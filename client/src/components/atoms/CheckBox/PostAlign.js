import React from "react";
import styled from "styled-components";
import { FaRegClock, FaFireAlt } from "react-icons/fa";

import { IconText } from "../../../commons/styles/template";

export default function PostAlign({ alignType = "recent", handleClick }) {
  const icons = alignType === "recent" ? <FaRegClock /> : <FaFireAlt />;
  const label = alignType === "recent" ? "최신" : "인기";

  return (
    <PostAlignButton onClick={handleClick}>
      {icons}
      {label}
    </PostAlignButton>
  );
}

const PostAlignButton = styled(IconText)`
  font-size: 1.25rem;
  svg {
    font-size: 1.45rem;
  }
`;
