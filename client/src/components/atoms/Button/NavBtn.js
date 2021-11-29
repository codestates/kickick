import React from "react";
// import { useNavigate } from 'react-router-dom'
import styled from "styled-components";

export default function NavBtn({
  context = '버튼',
  pathname = "",
  size = "1rem",
  color = "#000000",
  fontFamily,
  backgroundColor
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
      // onClick={() => moveHandler(pathname)}
    >
      {context}
    </Container>
  );
}

const Container = styled.div`
  margin: 0 0.3rem;
  padding: 0.3rem;
  font-size: ${({ size }) => size};
  font-family: ${({ fontFamily }) => fontFamily};
  color: ${({ color }) => color};
  border-radius: ${({ size }) => `${size.replace("rem", "") / 4}rem`};
  background-color: ${({ backgroundColor }) => backgroundColor};
  cursor: pointer;
`;
