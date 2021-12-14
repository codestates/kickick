import React, { useState } from "react";
import styled from "styled-components";

import { duplicationCheck } from "../../../apis/auth";

export default function SignupInput({
  type = "text",
  part = "username",
  inputHandler,
  validation = () => [true,"통과"],
  width = 20,
  height = 3,
  placeholder = "nickname1234",
  moveNextInput,
  duplicateCheckHanlder,
  inputRef,
  isChange,
  setIsChange,
  vaildHanlder,
  idx,
}) {
  const [inputValue, setInputValue] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const contextHandler = (e) => {
    setIsChange(true);
    setInputValue(e.target.value);
    vaildHanlder(idx, validation(e.target.value).isValid);
    inputHandler(part, e.target.value);
    duplicateCheckHanlder(idx, false);
    setIsDuplicate(false);
  };

  const duplicate = (part, value) => {
    const newObj = {};
    newObj[part] = value;
    duplicationCheck(newObj)
      .then(() => {
        setIsDuplicate(true);
        duplicateCheckHanlder(idx, true)
      })
      .catch(() => {
        setIsDuplicate(false);
        duplicateCheckHanlder(idx, false)
      });
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
        <Duplication
          onClick={() => duplicate(part, inputValue)}
          part={part}
          height={height}
        >
          중복체크
        </Duplication>
      </Container>
      <Warning
        height={height}
        isChange={isChange}
        validation={validation}
        inputValue={inputValue}
        isDuplicate={isDuplicate}
        part={part}
      >
        {validation(inputValue).message === "pass" && isDuplicate
          ? ""
          : validation(inputValue).message === "pass" && !isDuplicate
          ? "중복체크 버튼을 눌러주세요"
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
  visibility: ${({ isChange, validation, inputValue, isDuplicate, part }) =>
    !isChange || (validation(inputValue).isValid && (isDuplicate || part === "password"))
      ? "hidden"
      : "visible"};
  font-family: ${({ theme }) => theme.fontFamily.jua};
  color: red;
`;


const Duplication = styled.button`
  position: absolute;
  right: 0;
  bottom: ${({ height }) => `${height / 4}rem`};
  display: ${({ part }) => (part !== "password" ? "default" : "none")};
  width: ${({ height }) => `${height * 1.5}rem`};
  font-size: ${({ height }) => `${height / 3}rem`};
  font-family: ${({ theme }) => theme.fontFamily.jua};
  cursor: pointer;
`;