import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { LoginInput } from "../../../components";
import { signIn } from "../../../apis/auth"
import { setIsLogin, setTodayLogin } from "../../../store/actions/login";

export default function LoginInputChamber({ 
  width = 30,
  height = 3
  }) {
  // 로그인에 쓰이는 인풋 박스 모음집
  const [inputValue, setInputValue] = useState({ id: "", password: "" });
  const [isValid, setIsValid] = useState({ id: false, password: false });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todayLogin = useSelector((state) => state.login.todayLogin);
  const inputlist = [{ part: "id", type: 'text' }, { part:"password",type:"password"}]

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

  const loginHandler = () => {
    if (isValid.id && isValid.password) {
      signIn(inputValue.id, inputValue.password)
        .then(() => {
          dispatch(setIsLogin(true))
          if (todayLogin) dispatch(setTodayLogin(true));
        })
        .then(() => navigate("/"));
    }
  }

  console.log("inputValue:", inputValue, "isValid:", isValid);
  return (
    <Container width={width} height={height}>
      {inputlist.map((el, idx) => (
        <LoginInput
          part={el.part}
          type={el.type}
          width={width}
          height={height}
          inputHandler={inputHandler}
          validHandler={validHandler}
          key={idx}
        />
      ))}
      <SubmitBtn
        width={width}
        height={height}
        onClick={loginHandler}
        isValid={isValid}
      >
        로그인
      </SubmitBtn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => `${width}rem`};
`;

const SubmitBtn = styled.button`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  margin-top: 1rem;
  border-radius: ${({ height }) => `${height * 0.08}rem`};
  font-size: ${({ height }) => `${height * 0.7}rem`};
  color: ${({ theme }) => theme.color.back};
  font-family: ${({ theme }) => theme.fontFamily.jua};
  background-color: ${({ theme }) => theme.color.main};
  cursor: default;

  ${({ isValid }) =>
    isValid.id && isValid.password
      ? `
  cursor:pointer;
  : hover {
    opacity: 0.8;
  }

  :active {
    opacity: 1;
  }`
      : `
  opacity: 0.8
  `}
`;