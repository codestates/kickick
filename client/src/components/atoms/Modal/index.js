import React from "react";
import styled from "styled-components";
export default function Modal() {
  return (
    <Container>
      <Alarm>
        <div>
          <h2>정말로 삭제하시겠습니까?</h2>
        </div>
        <ButtonContainer>
          <button>Yes</button>
          <button>No</button>
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

  display: grid;
  place-items: center;
`;

const Alarm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20rem;
  height: 10rem;
  gap: 2rem;
  border: 2px solid black;

  font-size: 1.3rem;
  div {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    width: 5rem;
    height: 2rem;
    border: 1px solid black;
    cursor: pointer;
    :hover {
      background-color: #0c0c42;
      color: white;
    }
  }
`;
