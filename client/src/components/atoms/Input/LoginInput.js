import React, { useState } from "react";
import styled from "styled-components";

export default function LoginInput({
  type = "text",
  part = "email",
  // inputHandler,
  width = 20,
  height = 3,
}) {
  // 로그인, 회원가입에 쓰이는 인풋 박스 디자인
  const [isChange, setIsChange] = useState(false);
  const [inputValue, setInputValue] = useState("");


  const warning = [part, "값을 입력해주세요", "양식이 잘못되었습니다.", "완료되었습니다"];
  let num = inputValue.search(/[0-9]/g);
  let eng = inputValue.search(/[a-z]/gi);
  let spe = inputValue.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
  const validation =
    part === "email"
      ? !(
          (
            inputValue.includes("@") &&
            //@를 포함
            inputValue.split("@")[0] &&
            inputValue.split("@")[1].includes(".") &&
            //@앞뒤에 정보가 존재하며 .를 포함
            inputValue.split("@")[1].split(".")[0] &&
            inputValue.split("@")[1].split(".")[1]
          )
          //.앞뒤에 정보가 존재
        )
      : part === "password"
      ? !(
          (
            inputValue.length > 8 &&
            inputValue.length < 20 &&
            //8자 이상 20자 이하
            inputValue.search(/\s/) === -1 &&
            //공백이 없음
            num !== -1 &&
            eng !== -1 &&
            spe !== -1
          )
          //영문,숫자,특문을 혼합
        )
      : inputValue.length < 4 || inputValue.length > 10;
  
  
  const hanler = (e) => {
    setIsChange(true);
    setInputValue(e.target.value);
  };

  console.log(part, "=>  inputValue:", inputValue, ", validation:", validation);
  return (
    <Container
      width={width}
      height={height}
      inputValue={inputValue}
      isChange={isChange}
      validation={validation}
    >
      <WarningBox
        height={height}
        inputValue={inputValue}
        isChange={isChange}
        validation={validation}
      >
        {!isChange
          ? warning[0]
          : !inputValue
          ? warning[1]
          : validation
          ? warning[2]
          : warning[3]}
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
  border: 0.2rem solid;
  border-color: ${({ isChange, validation }) =>
    isChange === true && validation
      ? //한번이라도 입력했는데 벨리데이션을 통과 못함.
        "#FF0000"
      : isChange === true && !validation
      ? //한번이라도 입력한 후, 벨리데이션을 통과함.
        "#048EF1"
      : "#000000"};
  padding: ${({ height }) => `${height * 0.08}rem`};
  background-color: #ffffff;
  overflow: hidden;
`;

const Input = styled.input`
  width: inherit;
  font-size: ${({ height }) => `${((height * 2) / 3) * 0.7}rem`};
`;

const WarningBox = styled.div`
  position: absolute;
  top: ${({ height, inputValue }) =>
    inputValue.length
      ? `${(height * 0.1) / 2}rem`
      : `${(height * 0.5) / 2}rem`};
  left: ${({ height }) => `${(((height * 2) / 3) * 0.3) / 2}rem`};
  font-size: ${({ height, inputValue }) =>
    inputValue.length
      ? `${((height * 1) / 3) * 0.7}rem`
      : `${((height * 2) / 3) * 0.7}rem`};
  color: ${({ isChange, validation }) =>
    isChange === true && validation
      ? //한번이라도 입력했는데 벨리데이션을 통과 못함.
        "#FF0000"
      : isChange === true && !validation
      ? //한번이라도 입력한 후, 벨리데이션을 통과함.
        "#048EF1"
      : "#5A5A5A"};
  transition: font-size 0.15s;
  pointer-events: none;
`;
