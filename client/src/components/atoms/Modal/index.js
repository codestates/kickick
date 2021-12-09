import React from "react";
import styled from "styled-components";
export default function Modal({ handleModal, handleModalFunc, type }) {
  const sentence = {
    del: "정말로 삭제하시겠습니까?",
    login: "로그인 하시겠습니까?",
  };
  return (
    <Container onClick={handleModal}>
      <Alarm onClick={(e) => e.stopPropagation()}>
        <div>
          <h2>{sentence[type]}</h2>
        </div>
        <ButtonContainer>
          <button onClick={handleModalFunc}>Yes</button>
          <button onClick={handleModal}>No</button>
        </ButtonContainer>
      </Alarm>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
`;
const Alarm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;
  height: 10rem;
  gap: 2rem;
  font-size: 1.3rem;
  background-color: white;
  transform: translate(-50%, -150%);
  border: 2px solid black;

  div {
    text-align: center;
  }
  h2 {
    margin-top: 1.5rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  button {
    width: 5rem;
    height: 2rem;
    border: 1px solid black;
    cursor: pointer;
    :hover {
      font-weight: bold;
      background-color: #0c0c42;
      color: white;
    }
  }
`;
