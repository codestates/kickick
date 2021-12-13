import React, { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { LoginInput } from "../../../components";
import { signIn } from "../../../apis/auth";
import {
  isLoginAction,
  todayLoginAction,
  isPointAction,
} from "../../../store/actions/login";

export default function LoginInputChamber({
  width = 30,
  height = 3,
  setIsClicked,
}) {
  // 로그인에 쓰이는 인풋 박스 모음집
  const [inputValue, setInputValue] = useState({ id: "", password: "" });
  const [isValid, setIsValid] = useState({ id: false, password: false });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const passwordInput = useRef();
  const todayLogin = useSelector((state) => state.login.todayLogin);
  const inputlist = [
    { part: "id", type: "text", ref: null },
    { part: "password", type: "password", ref: passwordInput },
  ];
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`
  const naverURL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.REACT_APP_NAVER_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_NAVER_REDIRECT_URI}&state=${process.env.REACT_APP_NAVER_STATE}`;
  const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.REACT_APP_GOOGLE_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.email`;

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
      setIsClicked(true);
      setTimeout(() => {
        signIn(inputValue.id, inputValue.password)
          .then((res) => {
            const loginData = { ...res.data.data };
            delete loginData.kick_money;
            dispatch(isLoginAction(loginData));
            dispatch(isPointAction(res.data.data.kick_money));
            if (!todayLogin) dispatch(todayLoginAction(true));
          })
          .then(() => navigate("/", { replace: true }))
          .catch(() => {
            setIsClicked("");
          });
      }, 1000);
    }
  };
  
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
          loginHandler={loginHandler}
          coordinate={el.ref}
          passwordInput={passwordInput}
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
      <a href={kakaoURL}>
        <Test>카카오 로그인</Test>
      </a>
      <a href={naverURL}>
        <Test>네이버 로그인</Test>
      </a>
      <a href={googleURL}>
        <Test>구글 로그인</Test>
      </a>
    </Container>
  );
}

const Test = styled.div`
margin-top:1rem;
border:1px solid black;
cursor:pointer;
:hover{color:red;}
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => `${width}rem`};
  z-index: 2;
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