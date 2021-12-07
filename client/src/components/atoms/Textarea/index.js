import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

export default function Textarea({
  handleClick,
  value,
  handleChange,
  ...props
}) {
  const login = useSelector((state) => state.login);

  return (
    <Container>
      <TextArea
        placeholder={
          login.isLogin ? "댓글을 입력해 주세요." : "로그인 후 사용가능합니다."
        }
        {...props}
        onChange={handleChange}
        value={value}
        login={login.isLogin}
      />
      <p>{value.length} / 200</p>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  p {
    position: absolute;
    right: 0.5rem;
    bottom: 0.5rem;
  }
`;
const TextArea = styled.textarea`
  min-width: 100%;
  height: 7rem;

  padding: 1rem;
  border-radius: 5px;
  border: 2px solid #eeeeee;

  font-size: 1rem;
  resize: none;

  pointer-events: ${({ login }) => (login ? null : "none")};
  &:focus {
    outline: none;
    border: 2px solid skyblue;
  }
`;
