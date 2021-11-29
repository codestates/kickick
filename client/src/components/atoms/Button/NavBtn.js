import React from "react";
// import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

export default function NavBtn({
  context = "버튼",
  pathname = "",
  size = "1rem",
  color = "#000000",
  fontFamily = `'Jua', sans-serif`,
  backgroundColor,
}) {
  // nav에 있어서 클릭하면 해당 페이지로 이동하는 버튼
  // const navigate = useNavigate();
  // const moveHandler = (path) => {
  //   navigate(`/${path}`);
  // }
  return (
    <Container
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      fontFamily={fontFamily}
      context={context}
      // onClick={() => moveHandler(pathname)}
    >
      {context}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  top: ${({ context, size }) => context === "KICK" ? `${size.replace("rem", "") / 10}rem` : 0 };
  /* 로고의 경우 위치가 안맞아서 그떄만 조정되도록 함. */
  margin: 0 0.3rem;
  padding: 0.5rem;
  font-size: ${({ size }) => size};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  border-radius: ${({ size }) => `${size.replace("rem", "") / 2}rem`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`;
