import React, { useState } from "react";
import styled from "styled-components";

export default function SignupInput({
  type = "text",
  part = "username",
  inputHandler,
  validation = () => [true,"통과"],
  width = 20,
  height = 3,
  placeholder = "nickname1234",
  moveNextInput,
  inputRef,
  isChange,
  setIsChange,
  vaildHanlder,
  idx,
}) {
  const [inputValue, setInputValue] = useState("");

  const contextHandler = (e) => {
    console.log("여기", validation(e.target.value).isValid);
    console.log("저기", validation(e.target.value).message);
    setIsChange(true);
    setInputValue(e.target.value);
    vaildHanlder(idx, validation(e.target.value).isValid);
    inputHandler(part, e.target.value);
  };

  const enterHanlder = (e, func) => {
    if (e.key === "Enter") {
      func(idx+1);
    }
  };
  // enter치면 이벤트 발생하는 함수 << 유틸로 뺴고싶음 이벤트랑 함수를 매개변수로 받는다

  return (
    <>
      <Container
        width={width}
        height={height}
        isChange={isChange}
        validation={validation}
        inputValue={inputValue}
      >
        <Input
          onChange={contextHandler}
          onKeyPress={(e) => enterHanlder(e, moveNextInput)}
          type={type}
          value={inputValue}
          height={height}
          placeholder={`ex) ${placeholder}`}
          ref={inputRef}
        />
      </Container>
      <Warning
        height={height}
        isChange={isChange}
        validation={validation}
        inputValue={inputValue}
      >
        {validation(inputValue).message === "pass"
          ? ""
          : validation(inputValue).message}
      </Warning>
    </>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  margin: 0.5rem 0 0.2rem 0;
  padding: ${({ height }) => `${height * 0.08}rem`};
  border: 0.12rem solid;
  border-color: ${({ isChange, validation, inputValue, theme }) =>
    isChange && validation(inputValue).isValid
      ? "blue"
      : isChange && !validation(inputValue).isValid
      ? "red"
      : theme.color.font};
  border-radius: ${({ height }) => `${height * 0.04}rem`};
  background-color: ${({ theme }) => theme.color.back};
  overflow: hidden;
`;

const Input = styled.input`
  position: relative;
  top: ${({ height }) => `${height * 0.08}rem`};
  width: inherit;
  font-size: ${({ height }) => `${height * 0.6}rem`};
  font-family: ${({ theme }) => theme.fontFamily.jua};

  ::placeholder {
    opacity: 0.7;
  }
`;

const Warning = styled.div`
  padding-left: ${({ height }) => `${height / 15}rem`};
  visibility: ${({ isChange, validation, inputValue }) =>
    !isChange || validation(inputValue).isValid ? "hidden" : "visible"};
  font-family: ${({ theme }) => theme.fontFamily.jua};
  color: red;
`;