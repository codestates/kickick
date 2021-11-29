import React, { useState } from "react";
import styled from "styled-components";

export default function LoginInput({
  warning = ["양식이 잘못되었습니다.", "값을 입력해주세요"],
  type = "text",
  inputHandler,
  // inputValue = "",
  width = 20,
  height = 3,
}) {
  const [inputValue, setInputValue] = useState('')

  const hanler = (e) => {
    setInputValue(e.target.value);
  }
  console.log(inputValue);
  return (
    <Container width={width} height={height}>
      <WarningBox height={height} inputValue={inputValue}>
        {!inputValue ? warning[1] : warning[0]}
      </WarningBox>
      <Input type={type} height={height} value={inputValue} onChange={hanler} />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  border: 1px solid black;
  padding: ${({ height }) => `${height * 0.08}rem`};
  background-color:
  overflow: hidden;
`;

const Input = styled.input`
  width: inherit;
  font-size: ${({ height }) => `${((height * 2) / 3) * 0.7}rem`};
`;

const WarningBox = styled.div`
  position: absolute;
  top: ${({ height }) => `${(height * 0.3) / 2}rem`};
  left: ${({ height }) => `${(((height * 2) / 3) * 0.3) / 2}rem`};
  font-size: ${({ height, inputValue }) =>
    inputValue.length
      ? `${((height * 1) / 3) * 0.7}rem`
    : `${((height * 2) / 3) * 0.7}rem`};
  transition: 0.15s;
  pointer-events: none;
`;
