
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { SignupInputBox, DatePicker, ConditionChamber } from "../../../components";
import { signUp } from "../../../apis/auth"

export default function SignupForm() {
  const navigate = useNavigate();
  const width = 30;
  const height = 3;
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  const ArrInfo = [
    {
      title: "닉네임",
      type: "text",
      part: "username",
      placeholder: "username1234",
      inputRef: inputRef1,
      validation: validUsername,
    },
    {
      title: "이메일",
      type: "text",
      part: "email",
      placeholder: "email@gmail.com",
      inputRef: inputRef2,
      validation: validEmail,
    },
    {
      title: "비밀번호",
      type: "password",
      part: "password",
      placeholder: "1q2w3e4r!1",
      inputRef: inputRef3,
      validation: validpassword,
    },
  ];
  const conditionArr = [
    {
      essential: true,
      context: "약관1",
      description: "약관 내용입니다.",
    },
    {
      essential: true,
      context: "약관2",
      description: "약관 내용입니다.",
    },
    {
      essential: false,
      context: "약관3",
      description: "약관 내용입니다.",
    },
  ];


  const [inputValue, setInputValue] = useState("");
  const [isvalid, setIsVaild] = useState([]);
  const [conditionCheck,setConditionCheck] = useState({})


  const conditonChecker = (key, value) => {
    let newObj = { ...conditionCheck };
    newObj[key] = value;
    setConditionCheck({ ...newObj });
  }

  const inputHandler = (key, value) => {
    let newObj = { ...inputValue };
    newObj[key] = value;
    setInputValue({ ...newObj });
  };

  const moveNextInput = (idx) => {
    if (idx < ArrInfo.length) ArrInfo[idx].inputRef.current.focus();
  }
  
  function validUsername(value) {
    if (value.length <= 4) {
      return [false, "닉네임은 5글자 이상이어야 합니다"];
    }
    if (value.length >= 11) {
      return [false, "닉네임은 10글자보다 짧아야 합니다"];
    }
      return [value.length > 4 && value.length < 11, "통과"];
  }

  function validEmail(value) {
    if (value.search(/\s/) !== -1) {
      return [false,"공백을 지워주세요"]
    }
    if (!value.includes("@")) {
      return [false, "@가 존재하지 않습니다"];
    }
    if (
      !(value.split("@")[1].includes(".") &&
      value.split("@")[1].split(".")[0].length > 0 &&
      value.split("@")[1].split(".")[1].length > 0)
    ) {
      return [false, "형식이 올바르지 않습니다."]
    }
    return [
      value.search(/\s/) === -1 &&
      value.includes("@") &&
      value.split("@")[0] &&
      value.split("@")[1].includes(".") &&
      value.split("@")[1].split(".")[0].length > 0 &&
      value.split("@")[1].split(".")[1].length > 0, "통과"
    ];
  }

  function validpassword (value) { 
    let num = value.search(/[0-9]/g);
    let eng = value.search(/[a-z]/gi);
    let spe = value.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
    
    if (value.length < 8) {
      return [false, "비밀번호는 8자 이상이어야합니다"]
    }
    if (value.length >= 20) {
      return [false, "비밀번호는 20자보다 짧아야 합니다"];
    }
    if (value.search(/\s/) !== -1) {
      return [false, "공백이 존재해서는 안됩니다"];
    }
    if (num === -1 || eng === -1 || spe === -1) {
      return [false, "숫자, 알파벳, 특수문자가 포함되어 있어야 합니다"];
    }
      return [
        value.length >= 8 &&
        value.length < 20 &&
        value.search(/\s/) === -1 &&
        num !== -1 &&
        eng !== -1 &&
        spe !== -1, "통과"
      ];
  }
  const vaildHanlder = (idx,validation) => {
    const newArr = [...isvalid];
    newArr[idx] = validation;
    setIsVaild([...newArr]);
  }

  const submitHandler = () => {
    let countIsvalid = 0;
    let countCondition = 0;

    for (let i = 0; i < isvalid.length; i++) {
      if(isvalid[i] === true) countIsvalid++;
    }
    for (let k = 0; k < conditionArr.length; k++) {
      if (conditionArr[k].essential) countCondition++;
    }
    for (let l = 0; l < Object.values(conditionCheck).length; l++) {
      if(Object.values(conditionCheck)[l]) countCondition--;
    }
    if (
      countCondition === 0 &&
      countIsvalid === ArrInfo.length &&
      Object.keys(inputValue).join("").includes("birthday")
    ) {
      signUp(inputValue)
        .then((res) => res.data.data)
        .then(() => navigate("/", { replace: true }));
    }
  }
  

  console.log("inputValue:", inputValue);
  return (
    <Container>
      {ArrInfo.map((el, idx) => (
        <SignupInputBox
          title={el.title}
          type={el.type}
          part={el.part}
          width={width}
          height={height}
          placeholder={el.placeholder}
          inputHandler={inputHandler}
          moveNextInput={moveNextInput}
          inputRef={el.inputRef}
          validation={el.validation}
          vaildHanlder={vaildHanlder}
          idx={idx}
          key={idx}
        />
      ))}
      <DatePicker width={width} height={height} inputHandler={inputHandler} />
      <ConditionChamber
        conditionArr={conditionArr}
        width={width}
        height={height}
        conditonChecker={conditonChecker}
      />
      <SubmitContainer>
        <SubmitBtn onClick={submitHandler}>가입하기</SubmitBtn>
      </SubmitContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 79vh;
  align-items: center;
  width: ${({ width }) => `${width}rem`};
`;

const SubmitContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 20rem;
  height: 3rem;
  margin-top: 1.5rem;
`;

const SubmitBtn = styled.button`
  height: 2.4rem;
  padding-top:0.24rem;
  border-radius: 0.3rem;
  font-size: ${({ theme }) => theme.fontSizes.xxxl};
  font-family: ${({ theme }) => theme.fontFamily.blackHanSans};
  color: ${({ theme }) => theme.color.back};
  background-color: ${({ theme }) => theme.color.main};
`;