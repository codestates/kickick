import React from "react";

export default function Comment({ size = "lg", handleClick, ...props }) {
  let scale = 1;
  if (size === "sm") scale = 0.75;
  if (size === "lg") scale = 1.5;

  const style = {
    width: `${scale * 27}rem`,
    minHeight: `${scale * 6}rem`,
    padding: `${scale * 0.5}rem`,
    fontSize: `${scale}rem`,
  };

  // const handleResizeHeight = useCallback(() => {
  //   if (ref === null || ref.current === null) {
  //     return;
  //   }
  //   ref.current.style.height = `${scale * 4}rem`;
  //   ref.current.style.height = ref.current.scrollHeight + "px";
  // }, [scale]);

  return <textarea style={style} {...props} />;
}
