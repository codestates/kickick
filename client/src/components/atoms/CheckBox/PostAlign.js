import React from "./node_modules/react";
import { FaRegClock, FaFireAlt } from "./node_modules/react-icons/fa";
import styled from "./node_modules/styled-components";

export default function PostAlign({
  size = "lg",
  alignType = "recent",
  handleClick,
}) {
  const icons = alignType === "recent" ? <FaRegClock /> : <FaFireAlt />;
  const label = alignType === "recent" ? "최신" : "인기";

  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  return (
    <PostAlignButton onClick={handleClick} scale={scale}>
      {icons}
      {label}
    </PostAlignButton>
  );
}

const PostAlignButton = styled.div`
  display: flex;

  width: ${(props) => props.scale * 5}rem;
  height: ${(props) => props.scale * 2}rem;

  font-size: ${(props) => props.scale}rem;
  font-weight: bold;
  line-height: 0.9;

  svg {
    margin-right: 0.3rem;
  }
`;
