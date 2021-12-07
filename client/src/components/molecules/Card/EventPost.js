import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router";

import event_sample from "../../../assets/images/event_sample.png";

export default function EventPost() {
  const navigate = useNavigate();

  return (
    /* 여기에 notice_id */
    <Container onClick={() => navigate(`${2}`)}>
      <img src={event_sample} alt="" />
      <Description>
        <h3 className="event_name">오늘 가입하시면 전원 킥머니 300 증정</h3>
        <div className="event_info">
          <span>2022-12-05</span>
          <span>운영자 석</span>
        </div>
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
  box-shadow: 5px 5px 5px #ddd;

  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.25s ease-in;

  &:hover {
    box-shadow: none;
  }

  img {
    background-color: yellow;
  }

  .event_name {
    font-size: 1rem;
    margin-bottom: 2rem;
    line-height: 1.5;
  }

  .event_info {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    color: gray;
  }

  @media ${({ theme }) => theme.device.tablet} {
    width: calc(50% - 1.5rem);
  }
`;

const Description = styled.div`
  padding: 0.75rem;
`;
