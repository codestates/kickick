import React, { useState } from "react";
import styled from "styled-components";

import LoginInput from "../../atoms/Input/LoginInput"

export default function LoginInputChamber({ 
  width = 30,
  height = 3
  }) {
  // 로그인에 쓰이는 인풋 박스 모음집
  const [inputValue, setInputValue] = useState({ id: "", password: "" });
  const [isValid, setIsValid] = useState({ id: false, password: false });

  const inputlist = ["id", "password"]

  const inputHandler = (key, value) => {
    let newObj = { ...inputValue };
    newObj[key] = value;
    setInputValue({ ...newObj });
  };

  const validHandler = (key, value) => {
    let newObj = { ...isValid };
    newObj[key] = !value;
    setIsValid({ ...newObj });
  };

  const testHanlder = () => {
    if (isValid.id && isValid.password) {
      console.log("성공")
    }
  }

  console.log("inputValue:", inputValue, "isValid:", isValid);
  return (
    <Container width={width} height={height}>
      {inputlist.map((el, idx) => (
        <LoginInput
          part={el}
          width={width}
          height={height}
          inputHandler={inputHandler}
          validHandler={validHandler}
          key={idx}
        />
      ))}
      <SubmitBtn width={width} height={height} onClick={testHanlder}>
        로그인
      </SubmitBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  width: ${({ width }) => `${width}rem`};
`;

const SubmitBtn = styled.button`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  margin-top: 1rem;
  border-radius: ${({ height }) => `${height * 0.08}rem`};
  font-size: ${({ height }) => `${height * 0.7}rem`};
  background-color: green;
`;