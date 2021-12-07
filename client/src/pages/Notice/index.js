import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router";

import { CardBox, EventPost, Align } from "../../components";

const noticeList = [
  { category: "news", component: <News /> },
  { category: "event", component: <Event /> },
];

export default function Notice() {
  const { category } = useParams();
  const { component } = noticeList.find((el) => el.category === category);

  return <Container>{component}</Container>;
}

export function News() {
  return <div>d</div>;
}

export function Event() {
  const [highlight, setHighlight] = useState("진행중인 이벤트");
  const handleAlign = (event) => {
    const label = event.target.innerText;
    setHighlight(label);
  };
  return (
    <EventContainer>
      <Align
        category="이벤트"
        highlight={highlight}
        handleAlign={handleAlign}
      />
      <CardBox>
        <EventPost />
      </CardBox>
    </EventContainer>
  );
}

const Container = styled.div`
  width: 64rem;
  margin: 0 auto;

  @media ${({ theme }) => theme.device.notebookS} {
    width: 48rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 10rem 0;
`;
