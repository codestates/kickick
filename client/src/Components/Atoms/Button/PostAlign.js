import React from "react";
import { FaRegClock, FaFireAlt } from "react-icons/fa";

export default function PostAlign(
  backgroundColor = "white",
  size = "md",
  type = "recent",
  active,
  handleClick
) {
  const icons = type === "recent" ? <FaRegClock /> : <FaFireAlt />;
  const label = type === "recent" ? "최신" : "인기";

  let scale = 1;
  if (scale === "sm") scale = 0.75;
  if (scale === "lg") scale = 1.5;

  const style = {
    display: "flex",

    width: `${scale * 2}rem`,
    height: `${scale * 1}rem`,

    backgroundColor,
  };
  return (
    <button onClick={handleClick} style={style}>
      {icons}
      {label}
    </button>
  );
}
