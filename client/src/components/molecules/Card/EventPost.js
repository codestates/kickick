import React from "react";
import styled from "styled-components";

import kakaologo from "../../../assets/images/kakaologo.png";

export default function EventPost() {
  return (
    <Container>
      <img src={kakaologo} alt="" />
      <Description>
        <h3 className="event_name">오늘 가입하시면 전원 킥머니 300 증정</h3>
        <span>2022-12-05</span>
      </Description>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 14.5rem;

  margin: 0.75rem;

  border-radius: 0.2rem;
  box-shadow: 1px 1px 7px #dddddd;

  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s linear;

  &:hover {
    box-shadow: none;
  }

  img {
    background-color: yellow;
  }

  h3 {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(50% - 1.5rem);
  }
`;

const Description = styled.div`
  padding: 0.75rem;
`;
